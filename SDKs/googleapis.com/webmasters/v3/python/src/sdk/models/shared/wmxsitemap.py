from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wmxsitemapcontent


@dataclass_json
@dataclass
class WmxSitemap:
    contents: Optional[List[wmxsitemapcontent.WmxSitemapContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    is_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPending' }})
    is_sitemaps_index: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSitemapsIndex' }})
    last_downloaded: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDownloaded', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_submitted: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSubmitted', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    warnings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    

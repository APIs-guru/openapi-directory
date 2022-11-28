from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WmxSitemap:
    r"""WmxSitemap
    Contains detailed information about a specific URL submitted as a sitemap.
    """
    
    contents: Optional[List[WmxSitemapContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    is_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPending') }})
    is_sitemaps_index: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSitemapsIndex') }})
    last_downloaded: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDownloaded'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_submitted: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSubmitted'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    warnings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    

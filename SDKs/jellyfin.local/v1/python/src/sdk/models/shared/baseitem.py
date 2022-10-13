from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mediaurl


@dataclass_json
@dataclass
class BaseItem:
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    date_last_saved: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateLastSaved', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    extra_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraIds' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    is_hd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsHD' }})
    is_shortcut: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsShortcut' }})
    remote_trailers: Optional[List[mediaurl.MediaURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteTrailers' }})
    shortcut_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortcutPath' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    supports_external_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsExternalTransfer' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    

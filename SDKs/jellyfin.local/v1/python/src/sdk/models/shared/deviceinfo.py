from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientcapabilities


@dataclass_json
@dataclass
class DeviceInfo:
    app_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppName' }})
    app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppVersion' }})
    capabilities: Optional[clientcapabilities.ClientCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Capabilities' }})
    date_last_activity: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateLastActivity', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IconUrl' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUserId' }})
    last_user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUserName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

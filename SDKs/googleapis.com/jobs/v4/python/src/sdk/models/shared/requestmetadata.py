from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deviceinfo


@dataclass_json
@dataclass
class RequestMetadata:
    allow_missing_ids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMissingIds' }})
    device_info: Optional[deviceinfo.DeviceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceInfo' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

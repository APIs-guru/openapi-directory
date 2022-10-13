from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConcurrentAccessRestriction:
    device_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceAllowed' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    max_concurrent_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentDevices' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restricted' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    time_window_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeWindowSeconds' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    

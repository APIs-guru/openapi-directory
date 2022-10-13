from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DownloadAccessRestriction:
    device_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceAllowed' }})
    downloads_acquired: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadsAcquired' }})
    just_acquired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'justAcquired' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    max_download_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloadDevices' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restricted' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    

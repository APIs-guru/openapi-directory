from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SasPortalCreateSignedDeviceRequest:
    encoded_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodedDevice' }})
    installer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installerId' }})
    

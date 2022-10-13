from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sasportaldevice


@dataclass_json
@dataclass
class SasPortalSignDeviceRequest:
    device: Optional[sasportaldevice.SasPortalDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    

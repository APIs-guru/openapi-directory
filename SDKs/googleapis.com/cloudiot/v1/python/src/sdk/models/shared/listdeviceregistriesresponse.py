from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceregistry


@dataclass_json
@dataclass
class ListDeviceRegistriesResponse:
    device_registries: Optional[List[deviceregistry.DeviceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceRegistries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

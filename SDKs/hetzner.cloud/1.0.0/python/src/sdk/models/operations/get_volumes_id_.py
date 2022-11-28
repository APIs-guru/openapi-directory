from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetVolumesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetVolumesID200ApplicationJSONVolumeLocation:
    r"""GetVolumesID200ApplicationJSONVolumeLocation
    Location of the Volume. Volume can only be attached to Servers in the same Location.
    """
    
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclass
class GetVolumesID200ApplicationJSONVolumeProtection:
    r"""GetVolumesID200ApplicationJSONVolumeProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetVolumesID200ApplicationJSONVolumeStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclass
class GetVolumesID200ApplicationJSONVolume:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_device: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linux_device') }})
    location: GetVolumesID200ApplicationJSONVolumeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetVolumesID200ApplicationJSONVolumeProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: GetVolumesID200ApplicationJSONVolumeStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetVolumesID200ApplicationJSON:
    volume: GetVolumesID200ApplicationJSONVolume = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass
class GetVolumesIDRequest:
    path_params: GetVolumesIDPathParams = field()
    

@dataclass
class GetVolumesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_volumes_id_200_application_json_object: Optional[GetVolumesID200ApplicationJSON] = field(default=None)
    

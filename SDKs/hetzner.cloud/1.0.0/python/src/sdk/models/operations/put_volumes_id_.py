from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutVolumesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutVolumesIDUpdateVolumeRequestLabels:
    r"""PutVolumesIDUpdateVolumeRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclass
class PutVolumesIDUpdateVolumeRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    labels: Optional[PutVolumesIDUpdateVolumeRequestLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class PutVolumesID200ApplicationJSONVolumeLocation:
    r"""PutVolumesID200ApplicationJSONVolumeLocation
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
class PutVolumesID200ApplicationJSONVolumeProtection:
    r"""PutVolumesID200ApplicationJSONVolumeProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PutVolumesID200ApplicationJSONVolumeStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclass
class PutVolumesID200ApplicationJSONVolume:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_device: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linux_device') }})
    location: PutVolumesID200ApplicationJSONVolumeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PutVolumesID200ApplicationJSONVolumeProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: PutVolumesID200ApplicationJSONVolumeStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PutVolumesID200ApplicationJSON:
    volume: PutVolumesID200ApplicationJSONVolume = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass
class PutVolumesIDRequest:
    path_params: PutVolumesIDPathParams = field()
    request: Optional[PutVolumesIDUpdateVolumeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutVolumesIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_volumes_id_200_application_json_object: Optional[PutVolumesID200ApplicationJSON] = field(default=None)
    

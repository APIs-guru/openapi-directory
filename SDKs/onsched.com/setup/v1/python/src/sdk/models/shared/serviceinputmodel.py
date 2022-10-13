from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import availabilityinputmodel
from . import servicefeesinputmodel
from . import serviceoptionsinputmodel
from . import servicesettingsinputmodel


@dataclass_json
@dataclass
class ServiceInputModel:
    availability: Optional[availabilityinputmodel.AvailabilityInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    booking_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingInterval' }})
    booking_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingLimit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    fees: Optional[servicefeesinputmodel.ServiceFeesInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fees' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCapacity' }})
    max_group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxGroupSize' }})
    media_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaPageUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[serviceoptionsinputmodel.ServiceOptionsInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    service_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceGroupId' }})
    settings: Optional[servicesettingsinputmodel.ServiceSettingsInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

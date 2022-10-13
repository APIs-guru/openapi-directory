from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addressinputmodel
from . import availabilityinputmodel
from . import contactinputmodel
from . import customfieldinputmodel
from . import resourceoptionsinputmodel


@dataclass_json
@dataclass
class ResourceInputModel:
    address: Optional[addressinputmodel.AddressInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    availability: Optional[availabilityinputmodel.AvailabilityInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    contact: Optional[contactinputmodel.ContactInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    custom_fields: Optional[customfieldinputmodel.CustomFieldInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[resourceoptionsinputmodel.ResourceOptionsInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    service_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceIds' }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneId' }})
    

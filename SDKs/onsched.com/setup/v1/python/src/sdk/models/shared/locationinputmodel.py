from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addressinputmodel
from . import businesshoursinputmodel
from . import businessdefaultsinputmodel
from . import onlinesettingsinputmodel


@dataclass_json
@dataclass
class LocationInputModel:
    address: Optional[addressinputmodel.AddressInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    admin_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminEmail' }})
    admin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminName' }})
    business_hours: Optional[businesshoursinputmodel.BusinessHoursInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessHours' }})
    defaults: Optional[businessdefaultsinputmodel.BusinessDefaultsInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaults' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    friendly_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyId' }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCapacity' }})
    max_group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxGroupSize' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionId' }})
    settings: Optional[onlinesettingsinputmodel.OnlineSettingsInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    timezone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneName' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    

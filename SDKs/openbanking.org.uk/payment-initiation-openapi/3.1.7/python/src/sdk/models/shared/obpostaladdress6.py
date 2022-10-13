from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obaddresstypecode_enum


@dataclass_json
@dataclass
class ObPostalAddress6:
    address_line: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine' }})
    address_type: Optional[obaddresstypecode_enum.ObAddressTypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressType' }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildingNumber' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountrySubDivision' }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Department' }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostCode' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreetName' }})
    sub_department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubDepartment' }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TownName' }})
    

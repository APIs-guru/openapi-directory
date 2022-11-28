from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObPostalAddress6:
    r"""ObPostalAddress6
    Information that locates and identifies a specific address, as defined by postal services.
    """
    
    address_line: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressLine') }})
    address_type: Optional[ObAddressTypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressType') }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildingNumber') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountrySubDivision') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Department') }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostCode') }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    sub_department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubDepartment') }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TownName') }})
    

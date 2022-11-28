from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GeoTargeting:
    r"""GeoTargeting
    Geographical Targeting.
    """
    
    cities: Optional[List[City]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cities') }})
    countries: Optional[List[Country]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    exclude_countries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeCountries') }})
    metros: Optional[List[Metro]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metros') }})
    postal_codes: Optional[List[PostalCode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodes') }})
    regions: Optional[List[Region]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    

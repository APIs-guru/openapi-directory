from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import city
from . import country
from . import metro
from . import postalcode
from . import region


@dataclass_json
@dataclass
class GeoTargeting:
    cities: Optional[List[city.City]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cities' }})
    countries: Optional[List[country.Country]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    exclude_countries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeCountries' }})
    metros: Optional[List[metro.Metro]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metros' }})
    postal_codes: Optional[List[postalcode.PostalCode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodes' }})
    regions: Optional[List[region.Region]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    

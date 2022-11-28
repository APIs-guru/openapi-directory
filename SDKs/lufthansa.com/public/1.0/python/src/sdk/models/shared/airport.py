from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AirportNames:
    r"""AirportNames
    Container for airport names.
    """
    
    name: Optional[List[Name]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class AirportPosition:
    r"""AirportPosition
    Physical location of an airport. This data section is optional and therefore not always present.
    """
    
    coordinate: Optional[Coordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Coordinate') }})
    

@dataclass_json
@dataclass
class Airport:
    r"""Airport
    Array of all available airports or one airport matching the request.
    """
    
    airport_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirportCode') }})
    city_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CityCode') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCode') }})
    location_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationType') }})
    names: Optional[AirportNames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    position: Optional[AirportPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    time_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeZoneId') }})
    utc_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UtcOffset') }})
    

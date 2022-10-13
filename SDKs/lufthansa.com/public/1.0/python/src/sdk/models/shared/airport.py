from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import name
from . import coordinate


@dataclass_json
@dataclass
class AirportNames:
    name: Optional[List[name.Name]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class AirportPosition:
    coordinate: Optional[coordinate.Coordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Coordinate' }})
    

@dataclass_json
@dataclass
class Airport:
    airport_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirportCode' }})
    city_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CityCode' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountryCode' }})
    location_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationType' }})
    names: Optional[AirportNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    position: Optional[AirportPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Position' }})
    time_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeZoneId' }})
    utc_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UtcOffset' }})
    

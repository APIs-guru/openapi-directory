from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import airport
from . import link


@dataclass_json
@dataclass
class AirportResourceAirports:
    airport: Optional[airport.Airport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Airport' }})
    

@dataclass_json
@dataclass
class AirportResourceMeta:
    at_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@Version' }})
    link: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    

@dataclass_json
@dataclass
class AirportResource:
    airports: Optional[AirportResourceAirports] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Airports' }})
    meta: Optional[AirportResourceMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    

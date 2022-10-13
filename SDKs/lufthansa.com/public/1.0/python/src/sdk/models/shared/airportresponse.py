from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import airportresource


@dataclass_json
@dataclass
class AirportResponse:
    airport_resource: Optional[airportresource.AirportResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AirportResource' }})
    

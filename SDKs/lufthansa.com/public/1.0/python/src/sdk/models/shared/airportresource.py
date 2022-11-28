from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AirportResourceAirports:
    r"""AirportResourceAirports
    Container for airport elements.
    """
    
    airport: Optional[Airport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Airport') }})
    

@dataclass_json
@dataclass
class AirportResourceMeta:
    r"""AirportResourceMeta
    Container for meta links.
    """
    
    at_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@Version') }})
    link: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    

@dataclass_json
@dataclass
class AirportResource:
    r"""AirportResource
    Root element of airport response.
    """
    
    airports: Optional[AirportResourceAirports] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Airports') }})
    meta: Optional[AirportResourceMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    

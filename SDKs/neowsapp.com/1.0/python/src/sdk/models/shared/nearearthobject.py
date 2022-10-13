from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import closeapproachdata
from . import estimateddiametercontainer
from . import orbitaldata


@dataclass_json
@dataclass
class NearEarthObject:
    absolute_magnitude_h: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absolute_magnitude_h' }})
    close_approach_data: Optional[List[closeapproachdata.CloseApproachData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_approach_data' }})
    designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designation' }})
    estimated_diameter: Optional[estimateddiametercontainer.EstimatedDiameterContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_diameter' }})
    is_potentially_hazardous_asteroid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_potentially_hazardous_asteroid' }})
    is_sentry_object: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_sentry_object' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    name_limited: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name_limited' }})
    nasa_jpl_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nasa_jpl_url' }})
    neo_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neo_reference_id' }})
    orbital_data: Optional[orbitaldata.OrbitalData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbital_data' }})
    sentry_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentry_data' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orbitclass


@dataclass_json
@dataclass
class OrbitalData:
    aphelion_distance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aphelion_distance' }})
    ascending_node_longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ascending_node_longitude' }})
    data_arc_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_arc_in_days' }})
    eccentricity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eccentricity' }})
    epoch_osculation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epoch_osculation' }})
    equinox: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equinox' }})
    first_observation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_observation_date' }})
    inclination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclination' }})
    jupiter_tisserand_invariant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jupiter_tisserand_invariant' }})
    last_observation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_observation_date' }})
    mean_anomaly: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean_anomaly' }})
    mean_motion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean_motion' }})
    minimum_orbit_intersection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum_orbit_intersection' }})
    observations_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observations_used' }})
    orbit_class: Optional[orbitclass.OrbitClass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbit_class' }})
    orbit_determination_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbit_determination_date' }})
    orbit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbit_id' }})
    orbit_uncertainty: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbit_uncertainty' }})
    orbital_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orbital_period' }})
    perihelion_argument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perihelion_argument' }})
    perihelion_distance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perihelion_distance' }})
    perihelion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perihelion_time' }})
    semi_major_axis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'semi_major_axis' }})
    

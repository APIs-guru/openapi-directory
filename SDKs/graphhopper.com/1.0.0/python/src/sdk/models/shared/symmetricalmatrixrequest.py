from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import vehicleprofileid_enum


@dataclass_json
@dataclass
class SymmetricalMatrixRequest:
    curbsides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbsides' }})
    fail_fast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fail_fast' }})
    out_arrays: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out_arrays' }})
    point_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point_hints' }})
    points: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    snap_preventions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snap_preventions' }})
    turn_costs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turn_costs' }})
    vehicle: Optional[vehicleprofileid_enum.VehicleProfileIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle' }})
    

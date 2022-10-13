from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import vehicleprofileid_enum


@dataclass_json
@dataclass
class MatrixRequest:
    fail_fast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fail_fast' }})
    from_curbsides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_curbsides' }})
    from_point_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_point_hints' }})
    from_points: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_points' }})
    out_arrays: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out_arrays' }})
    snap_preventions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snap_preventions' }})
    to_curbsides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_curbsides' }})
    to_point_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_point_hints' }})
    to_points: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_points' }})
    turn_costs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turn_costs' }})
    vehicle: Optional[vehicleprofileid_enum.VehicleProfileIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle' }})
    

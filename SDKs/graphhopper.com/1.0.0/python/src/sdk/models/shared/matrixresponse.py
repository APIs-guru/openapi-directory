from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseinfo


@dataclass_json
@dataclass
class MatrixResponseHints:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    invalid_from_points: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_from_points' }})
    invalid_to_points: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_to_points' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    point_pairs: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point_pairs' }})
    

@dataclass_json
@dataclass
class MatrixResponse:
    distances: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distances' }})
    hints: Optional[List[MatrixResponseHints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hints' }})
    info: Optional[responseinfo.ResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    times: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'times' }})
    weights: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weights' }})
    

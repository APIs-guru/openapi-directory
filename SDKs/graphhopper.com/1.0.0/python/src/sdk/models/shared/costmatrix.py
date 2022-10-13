from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CostMatrixDataInfo:
    copyrights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyrights' }})
    took: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'took' }})
    

@dataclass_json
@dataclass
class CostMatrixData:
    distances: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distances' }})
    info: Optional[CostMatrixDataInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    times: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'times' }})
    
class CostMatrixTypeEnum(str, Enum):
    DEFAULT = "default"
    GOOGLE = "google"


@dataclass_json
@dataclass
class CostMatrix:
    data: Optional[CostMatrixData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_ids' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    type: Optional[CostMatrixTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

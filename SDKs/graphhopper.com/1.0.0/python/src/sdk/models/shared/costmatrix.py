from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CostMatrixDataInfo:
    r"""CostMatrixDataInfo
    Additional information for your request
    """
    
    copyrights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    took: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('took') }})
    

@dataclass_json
@dataclass
class CostMatrixData:
    r"""CostMatrixData
    JSON data of matrix response
    """
    
    distances: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distances') }})
    info: Optional[CostMatrixDataInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    times: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times') }})
    
class CostMatrixTypeEnum(str, Enum):
    DEFAULT = "default"
    GOOGLE = "google"


@dataclass_json
@dataclass
class CostMatrix:
    data: Optional[CostMatrixData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_ids') }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    type: Optional[CostMatrixTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

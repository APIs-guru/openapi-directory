from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import componentsource
from . import componenttransform
from . import stagesource
from . import stagesource

class ExecutionStageSummaryKindEnum(str, Enum):
    UNKNOWN_KIND = "UNKNOWN_KIND"
    PAR_DO_KIND = "PAR_DO_KIND"
    GROUP_BY_KEY_KIND = "GROUP_BY_KEY_KIND"
    FLATTEN_KIND = "FLATTEN_KIND"
    READ_KIND = "READ_KIND"
    WRITE_KIND = "WRITE_KIND"
    CONSTANT_KIND = "CONSTANT_KIND"
    SINGLETON_KIND = "SINGLETON_KIND"
    SHUFFLE_KIND = "SHUFFLE_KIND"


@dataclass_json
@dataclass
class ExecutionStageSummary:
    component_source: Optional[List[componentsource.ComponentSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentSource' }})
    component_transform: Optional[List[componenttransform.ComponentTransform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentTransform' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    input_source: Optional[List[stagesource.StageSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputSource' }})
    kind: Optional[ExecutionStageSummaryKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_source: Optional[List[stagesource.StageSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputSource' }})
    prerequisite_stage: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prerequisiteStage' }})
    

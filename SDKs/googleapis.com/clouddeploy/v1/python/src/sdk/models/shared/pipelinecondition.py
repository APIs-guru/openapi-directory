from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelinereadycondition
from . import targetspresentcondition


@dataclass_json
@dataclass
class PipelineCondition:
    pipeline_ready_condition: Optional[pipelinereadycondition.PipelineReadyCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineReadyCondition' }})
    targets_present_condition: Optional[targetspresentcondition.TargetsPresentCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetsPresentCondition' }})
    

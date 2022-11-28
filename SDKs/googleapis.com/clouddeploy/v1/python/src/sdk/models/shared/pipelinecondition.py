from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineCondition:
    r"""PipelineCondition
    PipelineCondition contains all conditions relevant to a Delivery Pipeline.
    """
    
    pipeline_ready_condition: Optional[PipelineReadyCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineReadyCondition') }})
    targets_present_condition: Optional[TargetsPresentCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetsPresentCondition') }})
    

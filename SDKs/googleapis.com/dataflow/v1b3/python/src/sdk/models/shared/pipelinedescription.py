from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineDescription:
    r"""PipelineDescription
    A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
    """
    
    display_data: Optional[List[DisplayData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayData') }})
    execution_pipeline_stage: Optional[List[ExecutionStageSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionPipelineStage') }})
    original_pipeline_transform: Optional[List[TransformSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPipelineTransform') }})
    step_names_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepNamesHash') }})
    

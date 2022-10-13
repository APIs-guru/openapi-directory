from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import displaydata
from . import executionstagesummary
from . import transformsummary


@dataclass_json
@dataclass
class PipelineDescription:
    display_data: Optional[List[displaydata.DisplayData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayData' }})
    execution_pipeline_stage: Optional[List[executionstagesummary.ExecutionStageSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionPipelineStage' }})
    original_pipeline_transform: Optional[List[transformsummary.TransformSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalPipelineTransform' }})
    step_names_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepNamesHash' }})
    

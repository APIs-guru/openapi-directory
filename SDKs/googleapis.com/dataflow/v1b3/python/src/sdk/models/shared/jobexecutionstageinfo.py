from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobExecutionStageInfo:
    r"""JobExecutionStageInfo
    Contains information about how a particular google.dataflow.v1beta3.Step will be executed.
    """
    
    step_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepName') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobExecutionInfo:
    r"""JobExecutionInfo
    Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.
    """
    
    stages: Optional[dict[str, JobExecutionStageInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    

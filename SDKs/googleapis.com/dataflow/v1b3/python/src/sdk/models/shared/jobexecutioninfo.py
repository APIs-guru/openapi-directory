from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobexecutionstageinfo


@dataclass_json
@dataclass
class JobExecutionInfo:
    stages: Optional[dict[str, jobexecutionstageinfo.JobExecutionStageInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stages' }})
    

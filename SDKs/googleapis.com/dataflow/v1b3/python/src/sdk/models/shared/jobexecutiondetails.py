from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stagesummary


@dataclass_json
@dataclass
class JobExecutionDetails:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    stages: Optional[List[stagesummary.StageSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stages' }})
    

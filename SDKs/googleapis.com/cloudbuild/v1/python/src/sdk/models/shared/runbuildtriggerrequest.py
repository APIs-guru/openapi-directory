from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reposource


@dataclass_json
@dataclass
class RunBuildTriggerRequest:
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    source: Optional[reposource.RepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    

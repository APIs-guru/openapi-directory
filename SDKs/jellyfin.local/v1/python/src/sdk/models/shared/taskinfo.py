from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taskresult
from . import taskstate_enum
from . import tasktriggerinfo


@dataclass_json
@dataclass
class TaskInfo:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    current_progress_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentProgressPercentage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsHidden' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    last_execution_result: Optional[taskresult.TaskResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastExecutionResult' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: Optional[taskstate_enum.TaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    triggers: Optional[List[tasktriggerinfo.TaskTriggerInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Triggers' }})
    

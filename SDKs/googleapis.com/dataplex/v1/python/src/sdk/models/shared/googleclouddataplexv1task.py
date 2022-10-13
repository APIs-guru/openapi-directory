from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1taskexecutionspec
from . import googleclouddataplexv1taskexecutionstatus
from . import googleclouddataplexv1tasknotebooktaskconfig
from . import googleclouddataplexv1tasksparktaskconfig
from . import googleclouddataplexv1tasktriggerspec

class GoogleCloudDataplexV1TaskStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Task:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    execution_spec: Optional[googleclouddataplexv1taskexecutionspec.GoogleCloudDataplexV1TaskExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionSpec' }})
    execution_status: Optional[googleclouddataplexv1taskexecutionstatus.GoogleCloudDataplexV1TaskExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStatus' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notebook: Optional[googleclouddataplexv1tasknotebooktaskconfig.GoogleCloudDataplexV1TaskNotebookTaskConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notebook' }})
    spark: Optional[googleclouddataplexv1tasksparktaskconfig.GoogleCloudDataplexV1TaskSparkTaskConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spark' }})
    state: Optional[GoogleCloudDataplexV1TaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    trigger_spec: Optional[googleclouddataplexv1tasktriggerspec.GoogleCloudDataplexV1TaskTriggerSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerSpec' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

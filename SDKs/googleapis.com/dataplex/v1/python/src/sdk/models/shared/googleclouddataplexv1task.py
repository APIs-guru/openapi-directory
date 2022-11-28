from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1TaskStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Task:
    r"""GoogleCloudDataplexV1Task
    A task represents a user-visible job.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_spec: Optional[GoogleCloudDataplexV1TaskExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSpec') }})
    execution_status: Optional[GoogleCloudDataplexV1TaskExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStatus') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notebook: Optional[GoogleCloudDataplexV1TaskNotebookTaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebook') }})
    spark: Optional[GoogleCloudDataplexV1TaskSparkTaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spark') }})
    state: Optional[GoogleCloudDataplexV1TaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    trigger_spec: Optional[GoogleCloudDataplexV1TaskTriggerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerSpec') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInput:
    r"""GoogleCloudDataplexV1TaskInput
    A task represents a user-visible job.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_spec: Optional[GoogleCloudDataplexV1TaskExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    notebook: Optional[GoogleCloudDataplexV1TaskNotebookTaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebook') }})
    spark: Optional[GoogleCloudDataplexV1TaskSparkTaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spark') }})
    trigger_spec: Optional[GoogleCloudDataplexV1TaskTriggerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerSpec') }})
    

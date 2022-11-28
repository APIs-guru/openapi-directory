from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecutionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    PREPARING = "PREPARING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"
    INITIALIZING = "INITIALIZING"


@dataclass_json
@dataclass
class ExecutionInput:
    r"""ExecutionInput
    The definition of a single executed notebook.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    execution_template: Optional[ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTemplate') }})
    output_notebook_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputNotebookFile') }})
    

@dataclass_json
@dataclass
class Execution:
    r"""Execution
    The definition of a single executed notebook.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_template: Optional[ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTemplate') }})
    job_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_notebook_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputNotebookFile') }})
    state: Optional[ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

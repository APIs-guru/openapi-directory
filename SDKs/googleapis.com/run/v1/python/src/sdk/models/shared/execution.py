from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Execution:
    r"""Execution
    Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
    """
    
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[ExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[ExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

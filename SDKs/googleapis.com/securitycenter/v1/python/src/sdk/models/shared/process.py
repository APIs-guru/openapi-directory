from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Process:
    r"""Process
    Represents an operating system process.
    """
    
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    arguments_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argumentsTruncated') }})
    binary: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binary') }})
    env_variables: Optional[List[EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    env_variables_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariablesTruncated') }})
    libraries: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraries') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_pid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPid') }})
    pid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pid') }})
    script: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

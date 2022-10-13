from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file
from . import environmentvariable
from . import file
from . import file


@dataclass_json
@dataclass
class Process:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    arguments_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'argumentsTruncated' }})
    binary: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binary' }})
    env_variables: Optional[List[environmentvariable.EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envVariables' }})
    env_variables_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envVariablesTruncated' }})
    libraries: Optional[List[file.File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'libraries' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_pid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPid' }})
    pid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pid' }})
    script: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    

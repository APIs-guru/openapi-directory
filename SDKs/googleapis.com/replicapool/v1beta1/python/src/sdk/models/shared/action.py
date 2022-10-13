from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import envvariable


@dataclass_json
@dataclass
class Action:
    commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands' }})
    env_variables: Optional[List[envvariable.EnvVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envVariables' }})
    timeout_milli_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutMilliSeconds' }})
    

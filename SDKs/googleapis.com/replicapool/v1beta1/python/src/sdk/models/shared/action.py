from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    An action that gets executed during initialization of the replicas.
    """
    
    commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    env_variables: Optional[List[EnvVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    timeout_milli_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutMilliSeconds') }})
    

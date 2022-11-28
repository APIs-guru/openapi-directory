from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pipeline:
    r"""Pipeline
    Specifies a series of actions to execute, expressed as Docker containers.
    """
    
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    encrypted_environment: Optional[Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedEnvironment') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    resources: Optional[Resources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

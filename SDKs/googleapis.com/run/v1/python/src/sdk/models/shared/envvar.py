from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvVar:
    r"""EnvVar
    EnvVar represents an environment variable present in a Container.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_from: Optional[EnvVarSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrom') }})
    

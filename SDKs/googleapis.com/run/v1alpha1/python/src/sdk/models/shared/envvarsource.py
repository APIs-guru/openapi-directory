from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvVarSource:
    r"""EnvVarSource
    EnvVarSource represents a source for the value of an EnvVar.
    """
    
    config_map_key_ref: Optional[ConfigMapKeySelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMapKeyRef') }})
    secret_key_ref: Optional[SecretKeySelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKeyRef') }})
    

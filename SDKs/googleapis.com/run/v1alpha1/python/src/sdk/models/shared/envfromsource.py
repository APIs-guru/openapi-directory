from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvFromSource:
    r"""EnvFromSource
    Not supported by Cloud Run EnvFromSource represents the source of a set of ConfigMaps
    """
    
    config_map_ref: Optional[ConfigMapEnvSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMapRef') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    secret_ref: Optional[SecretEnvSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretRef') }})
    

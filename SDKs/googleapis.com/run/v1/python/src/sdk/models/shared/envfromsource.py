from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmapenvsource
from . import secretenvsource


@dataclass_json
@dataclass
class EnvFromSource:
    config_map_ref: Optional[configmapenvsource.ConfigMapEnvSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configMapRef' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    secret_ref: Optional[secretenvsource.SecretEnvSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretRef' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmapkeyselector
from . import secretkeyselector


@dataclass_json
@dataclass
class EnvVarSource:
    config_map_key_ref: Optional[configmapkeyselector.ConfigMapKeySelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configMapKeyRef' }})
    secret_key_ref: Optional[secretkeyselector.SecretKeySelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretKeyRef' }})
    

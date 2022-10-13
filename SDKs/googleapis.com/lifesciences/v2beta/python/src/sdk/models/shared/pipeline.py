from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import secret
from . import resources


@dataclass_json
@dataclass
class Pipeline:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    encrypted_environment: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedEnvironment' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    resources: Optional[resources.Resources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inlinesecret
from . import secretmanagersecret


@dataclass_json
@dataclass
class Secrets:
    inline: Optional[List[inlinesecret.InlineSecret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inline' }})
    secret_manager: Optional[List[secretmanagersecret.SecretManagerSecret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretManager' }})
    

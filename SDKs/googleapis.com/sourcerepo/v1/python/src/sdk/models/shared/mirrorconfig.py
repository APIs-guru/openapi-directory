from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MirrorConfig:
    deploy_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployKeyId' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    webhook_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookId' }})
    

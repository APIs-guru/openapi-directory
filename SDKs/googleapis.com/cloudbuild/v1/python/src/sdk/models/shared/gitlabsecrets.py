from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitLabSecrets:
    api_access_token_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiAccessTokenVersion' }})
    api_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyVersion' }})
    read_access_token_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readAccessTokenVersion' }})
    webhook_secret_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookSecretVersion' }})
    

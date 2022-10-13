from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BitbucketServerSecrets:
    admin_access_token_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminAccessTokenVersionName' }})
    read_access_token_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readAccessTokenVersionName' }})
    webhook_secret_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookSecretVersionName' }})
    

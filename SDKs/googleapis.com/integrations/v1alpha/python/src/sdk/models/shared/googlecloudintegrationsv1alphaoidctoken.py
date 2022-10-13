from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaOidcToken:
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    token_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenExpireTime' }})
    

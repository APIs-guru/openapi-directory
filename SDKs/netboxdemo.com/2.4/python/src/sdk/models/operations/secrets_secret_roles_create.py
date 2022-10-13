from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesCreateRequest:
    request: shared.SecretRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretRolesCreateResponse:
    content_type: str = field(default=None)
    secret_role: Optional[shared.SecretRole] = field(default=None)
    status_code: int = field(default=None)
    

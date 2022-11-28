from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesCreateRequest:
    request: shared.SecretRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretRolesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    secret_role: Optional[shared.SecretRole] = field(default=None)
    

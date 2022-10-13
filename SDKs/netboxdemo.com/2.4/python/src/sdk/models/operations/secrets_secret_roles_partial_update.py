from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesPartialUpdateRequest:
    path_params: SecretsSecretRolesPartialUpdatePathParams = field(default=None)
    request: shared.SecretRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretRolesPartialUpdateResponse:
    content_type: str = field(default=None)
    secret_role: Optional[shared.SecretRole] = field(default=None)
    status_code: int = field(default=None)
    

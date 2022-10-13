from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesReadRequest:
    path_params: SecretsSecretRolesReadPathParams = field(default=None)
    

@dataclass
class SecretsSecretRolesReadResponse:
    content_type: str = field(default=None)
    secret_role: Optional[shared.SecretRole] = field(default=None)
    status_code: int = field(default=None)
    

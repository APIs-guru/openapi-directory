from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesReadRequest:
    path_params: SecretsSecretRolesReadPathParams = field()
    

@dataclass
class SecretsSecretRolesReadResponse:
    content_type: str = field()
    status_code: int = field()
    secret_role: Optional[shared.SecretRole] = field(default=None)
    

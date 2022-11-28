from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesUpdateRequest:
    path_params: SecretsSecretRolesUpdatePathParams = field()
    request: shared.SecretRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretRolesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    secret_role: Optional[shared.SecretRole] = field(default=None)
    

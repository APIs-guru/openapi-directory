from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretRolesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesPartialUpdateRequest:
    path_params: SecretsSecretRolesPartialUpdatePathParams = field()
    request: shared.SecretRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretRolesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    secret_role: Optional[shared.SecretRole] = field(default=None)
    

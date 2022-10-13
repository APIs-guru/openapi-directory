from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsPartialUpdateRequest:
    path_params: SecretsSecretsPartialUpdatePathParams = field(default=None)
    request: shared.WritableSecret = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretsPartialUpdateResponse:
    content_type: str = field(default=None)
    secret: Optional[shared.Secret] = field(default=None)
    status_code: int = field(default=None)
    

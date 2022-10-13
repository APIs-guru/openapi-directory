from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsReadRequest:
    path_params: SecretsSecretsReadPathParams = field(default=None)
    

@dataclass
class SecretsSecretsReadResponse:
    content_type: str = field(default=None)
    secret: Optional[shared.Secret] = field(default=None)
    status_code: int = field(default=None)
    

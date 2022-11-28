from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsReadRequest:
    path_params: SecretsSecretsReadPathParams = field()
    

@dataclass
class SecretsSecretsReadResponse:
    content_type: str = field()
    status_code: int = field()
    secret: Optional[shared.Secret] = field(default=None)
    

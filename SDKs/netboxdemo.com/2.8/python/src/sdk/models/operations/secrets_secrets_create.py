from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsCreateRequest:
    request: shared.WritableSecret = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretsCreateResponse:
    content_type: str = field(default=None)
    secret: Optional[shared.Secret] = field(default=None)
    status_code: int = field(default=None)
    

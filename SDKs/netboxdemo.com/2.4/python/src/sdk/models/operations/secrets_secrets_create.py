from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsCreateRequest:
    request: shared.WritableSecretInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    secret: Optional[shared.Secret] = field(default=None)
    

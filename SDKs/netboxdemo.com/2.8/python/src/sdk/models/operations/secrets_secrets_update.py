from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsUpdateRequest:
    path_params: SecretsSecretsUpdatePathParams = field()
    request: shared.WritableSecretInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    secret: Optional[shared.Secret] = field(default=None)
    

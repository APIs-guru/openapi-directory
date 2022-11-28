from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SecretsSecretsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsPartialUpdateRequest:
    path_params: SecretsSecretsPartialUpdatePathParams = field()
    request: shared.WritableSecretInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SecretsSecretsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    secret: Optional[shared.Secret] = field(default=None)
    

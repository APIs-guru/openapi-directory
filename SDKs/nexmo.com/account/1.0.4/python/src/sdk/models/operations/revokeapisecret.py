from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RevokeAPISecretPathParams:
    api_key: str = field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    secret_id: str = field(metadata={'path_param': { 'field_name': 'secret_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeAPISecretSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RevokeAPISecretRequest:
    path_params: RevokeAPISecretPathParams = field()
    security: RevokeAPISecretSecurity = field()
    

@dataclass
class RevokeAPISecretResponse:
    content_type: str = field()
    status_code: int = field()
    revoke_api_secret_401_application_json_any: Optional[Any] = field(default=None)
    revoke_api_secret_403_application_json_any: Optional[Any] = field(default=None)
    revoke_api_secret_404_application_json_one_of: Optional[Any] = field(default=None)
    

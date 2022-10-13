from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RevokeAPISecretPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    secret_id: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeAPISecretSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RevokeAPISecretRequest:
    path_params: RevokeAPISecretPathParams = field(default=None)
    security: RevokeAPISecretSecurity = field(default=None)
    

@dataclass
class RevokeAPISecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    revoke_api_secret_401_application_json_any: Optional[Any] = field(default=None)
    revoke_api_secret_403_application_json_any: Optional[Any] = field(default=None)
    revoke_api_secret_404_application_json_one_of: Optional[Any] = field(default=None)
    

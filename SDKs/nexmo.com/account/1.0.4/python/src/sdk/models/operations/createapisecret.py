from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateAPISecretPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAPISecretSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAPISecretRequest:
    path_params: CreateAPISecretPathParams = field(default=None)
    request: shared.CreateSecretRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAPISecretSecurity = field(default=None)
    

@dataclass
class CreateAPISecretResponse:
    content_type: str = field(default=None)
    error_api_key_not_found: Optional[shared.ErrorAPIKeyNotFound] = field(default=None)
    status_code: int = field(default=None)
    create_api_secret_400_application_json_any: Optional[Any] = field(default=None)
    create_api_secret_401_application_json_any: Optional[Any] = field(default=None)
    secret_info: Optional[shared.SecretInfo] = field(default=None)
    

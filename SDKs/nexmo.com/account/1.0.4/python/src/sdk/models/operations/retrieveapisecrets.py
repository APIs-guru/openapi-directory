from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RetrieveAPISecretsPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveAPISecretsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RetrieveAPISecretsRequest:
    path_params: RetrieveAPISecretsPathParams = field(default=None)
    security: RetrieveAPISecretsSecurity = field(default=None)
    

@dataclass
class RetrieveAPISecretsResponse:
    content_type: str = field(default=None)
    error_api_key_not_found: Optional[shared.ErrorAPIKeyNotFound] = field(default=None)
    status_code: int = field(default=None)
    retrieve_api_secrets_200_application_json_any: Optional[Any] = field(default=None)
    retrieve_api_secrets_401_application_json_any: Optional[Any] = field(default=None)
    

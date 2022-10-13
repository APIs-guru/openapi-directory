from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RetrieveAPISecretPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    secret_id: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveAPISecretSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RetrieveAPISecretRequest:
    path_params: RetrieveAPISecretPathParams = field(default=None)
    security: RetrieveAPISecretSecurity = field(default=None)
    

@dataclass
class RetrieveAPISecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    retrieve_api_secret_401_application_json_any: Optional[Any] = field(default=None)
    retrieve_api_secret_404_application_json_one_of: Optional[Any] = field(default=None)
    secret_info: Optional[shared.SecretInfo] = field(default=None)
    

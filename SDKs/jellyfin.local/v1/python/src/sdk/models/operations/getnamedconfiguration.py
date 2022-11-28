from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNamedConfigurationPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNamedConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNamedConfigurationRequest:
    path_params: GetNamedConfigurationPathParams = field()
    security: GetNamedConfigurationSecurity = field()
    

@dataclass
class GetNamedConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    get_named_configuration_200_application_json_binary_string: Optional[bytes] = field(default=None)
    

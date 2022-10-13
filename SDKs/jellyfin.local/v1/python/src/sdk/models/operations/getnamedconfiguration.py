from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNamedConfigurationPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNamedConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNamedConfigurationRequest:
    path_params: GetNamedConfigurationPathParams = field(default=None)
    security: GetNamedConfigurationSecurity = field(default=None)
    

@dataclass
class GetNamedConfigurationResponse:
    content_type: str = field(default=None)
    get_named_configuration_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    

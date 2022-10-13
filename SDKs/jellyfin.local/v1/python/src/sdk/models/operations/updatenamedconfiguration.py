from dataclasses import dataclass, field



@dataclass
class UpdateNamedConfigurationPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNamedConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateNamedConfigurationRequest:
    path_params: UpdateNamedConfigurationPathParams = field(default=None)
    security: UpdateNamedConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateNamedConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

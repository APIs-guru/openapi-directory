from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateNamedConfigurationPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNamedConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateNamedConfigurationRequest:
    path_params: UpdateNamedConfigurationPathParams = field()
    security: UpdateNamedConfigurationSecurity = field()
    

@dataclass
class UpdateNamedConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    

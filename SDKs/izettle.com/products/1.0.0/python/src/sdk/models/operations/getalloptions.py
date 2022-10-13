from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllOptionsPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllOptionsSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllOptionsSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllOptionsSecurity:
    option1: Optional[GetAllOptionsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllOptionsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllOptionsRequest:
    path_params: GetAllOptionsPathParams = field(default=None)
    security: GetAllOptionsSecurity = field(default=None)
    

@dataclass
class GetAllOptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    variant_options_responses: Optional[List[shared.VariantOptionsResponse]] = field(default=None)
    

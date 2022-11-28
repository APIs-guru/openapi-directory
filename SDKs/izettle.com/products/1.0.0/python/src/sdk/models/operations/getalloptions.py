from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllOptionsPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllOptionsSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllOptionsRequest:
    path_params: GetAllOptionsPathParams = field()
    security: GetAllOptionsSecurity = field()
    

@dataclass
class GetAllOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    variant_options_responses: Optional[List[shared.VariantOptionsResponse]] = field(default=None)
    

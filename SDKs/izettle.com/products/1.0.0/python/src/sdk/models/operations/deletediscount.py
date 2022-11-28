from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDiscountPathParams:
    discount_uuid: str = field(metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDiscountSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteDiscountRequest:
    path_params: DeleteDiscountPathParams = field()
    security: DeleteDiscountSecurity = field()
    

@dataclass
class DeleteDiscountResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDiscountPathParams:
    discount_uuid: str = field(metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDiscountHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDiscountSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDiscountRequest:
    headers: GetDiscountHeaders = field()
    path_params: GetDiscountPathParams = field()
    security: GetDiscountSecurity = field()
    

@dataclass
class GetDiscountResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    discount_response: Optional[shared.DiscountResponse] = field(default=None)
    

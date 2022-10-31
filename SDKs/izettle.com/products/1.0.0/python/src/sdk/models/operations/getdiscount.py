from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDiscountPathParams:
    discount_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDiscountHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDiscountSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDiscountSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDiscountSecurity:
    option1: Optional[GetDiscountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDiscountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDiscountRequest:
    path_params: GetDiscountPathParams = field(default=None)
    headers: GetDiscountHeaders = field(default=None)
    security: GetDiscountSecurity = field(default=None)
    

@dataclass
class GetDiscountResponse:
    content_type: str = field(default=None)
    discount_response: Optional[shared.DiscountResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

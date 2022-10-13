from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateDiscountPathParams:
    discount_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDiscountHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class UpdateDiscountSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateDiscountSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateDiscountSecurity:
    option1: Optional[UpdateDiscountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateDiscountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateDiscountRequest:
    path_params: UpdateDiscountPathParams = field(default=None)
    headers: UpdateDiscountHeaders = field(default=None)
    request: shared.DiscountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDiscountSecurity = field(default=None)
    

@dataclass
class UpdateDiscountResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteDiscountPathParams:
    discount_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDiscountSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteDiscountSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteDiscountSecurity:
    option1: Optional[DeleteDiscountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteDiscountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteDiscountRequest:
    path_params: DeleteDiscountPathParams = field(default=None)
    security: DeleteDiscountSecurity = field(default=None)
    

@dataclass
class DeleteDiscountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

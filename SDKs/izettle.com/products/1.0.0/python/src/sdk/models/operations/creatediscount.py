from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateDiscountPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDiscountSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateDiscountSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDiscountSecurity:
    option1: Optional[CreateDiscountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateDiscountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateDiscountRequest:
    path_params: CreateDiscountPathParams = field(default=None)
    request: Optional[shared.DiscountRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDiscountSecurity = field(default=None)
    

@dataclass
class CreateDiscountResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

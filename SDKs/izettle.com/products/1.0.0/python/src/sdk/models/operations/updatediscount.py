from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateDiscountPathParams:
    discount_uuid: str = field(metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDiscountHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDiscountSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateDiscountRequest:
    headers: UpdateDiscountHeaders = field()
    path_params: UpdateDiscountPathParams = field()
    request: shared.DiscountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDiscountSecurity = field()
    

@dataclass
class UpdateDiscountResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    

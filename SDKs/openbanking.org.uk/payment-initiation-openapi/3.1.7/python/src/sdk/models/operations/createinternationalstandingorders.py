from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateInternationalStandingOrdersHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    x_idempotency_key: str = field(default=None, metadata={'header': { 'field_name': 'x-idempotency-key', 'style': 'simple', 'explode': False }})
    x_jws_signature: str = field(default=None, metadata={'header': { 'field_name': 'x-jws-signature', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInternationalStandingOrdersRequests:
    application_jose_plus_jwe: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_international_standing_order4: Optional[shared.ObWriteInternationalStandingOrder4] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_international_standing_order5: Optional[shared.ObWriteInternationalStandingOrder4] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInternationalStandingOrdersSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateInternationalStandingOrdersRequest:
    headers: CreateInternationalStandingOrdersHeaders = field(default=None)
    request: CreateInternationalStandingOrdersRequests = field(default=None)
    security: CreateInternationalStandingOrdersSecurity = field(default=None)
    

@dataclass
class CreateInternationalStandingOrdersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_write_international_standing_order_response7: Optional[shared.ObWriteInternationalStandingOrderResponse7] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateInternationalStandingOrderConsentsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    x_idempotency_key: str = field(default=None, metadata={'header': { 'field_name': 'x-idempotency-key' }})
    x_jws_signature: str = field(default=None, metadata={'header': { 'field_name': 'x-jws-signature' }})
    

@dataclass
class CreateInternationalStandingOrderConsentsRequests:
    application_jose_plus_jwe: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_international_standing_order_consent6: Optional[shared.ObWriteInternationalStandingOrderConsent6] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_international_standing_order_consent7: Optional[shared.ObWriteInternationalStandingOrderConsent6] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInternationalStandingOrderConsentsSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateInternationalStandingOrderConsentsRequest:
    headers: CreateInternationalStandingOrderConsentsHeaders = field(default=None)
    request: CreateInternationalStandingOrderConsentsRequests = field(default=None)
    security: CreateInternationalStandingOrderConsentsSecurity = field(default=None)
    

@dataclass
class CreateInternationalStandingOrderConsentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_write_international_standing_order_consent_response7: Optional[shared.ObWriteInternationalStandingOrderConsentResponse7] = field(default=None)
    status_code: int = field(default=None)
    

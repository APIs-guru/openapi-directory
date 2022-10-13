from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateInternationalScheduledPaymentConsentsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    x_idempotency_key: str = field(default=None, metadata={'header': { 'field_name': 'x-idempotency-key' }})
    x_jws_signature: str = field(default=None, metadata={'header': { 'field_name': 'x-jws-signature' }})
    

@dataclass
class CreateInternationalScheduledPaymentConsentsRequests:
    application_jose_plus_jwe: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_international_scheduled_consent5: Optional[shared.ObWriteInternationalScheduledConsent5] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_international_scheduled_consent6: Optional[shared.ObWriteInternationalScheduledConsent5] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInternationalScheduledPaymentConsentsSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateInternationalScheduledPaymentConsentsRequest:
    headers: CreateInternationalScheduledPaymentConsentsHeaders = field(default=None)
    request: CreateInternationalScheduledPaymentConsentsRequests = field(default=None)
    security: CreateInternationalScheduledPaymentConsentsSecurity = field(default=None)
    

@dataclass
class CreateInternationalScheduledPaymentConsentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_write_international_scheduled_consent_response6: Optional[shared.ObWriteInternationalScheduledConsentResponse6] = field(default=None)
    status_code: int = field(default=None)
    

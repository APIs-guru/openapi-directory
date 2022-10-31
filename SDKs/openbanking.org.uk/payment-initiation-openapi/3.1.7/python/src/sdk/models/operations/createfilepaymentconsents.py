from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateFilePaymentConsentsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    x_idempotency_key: str = field(default=None, metadata={'header': { 'field_name': 'x-idempotency-key', 'style': 'simple', 'explode': False }})
    x_jws_signature: str = field(default=None, metadata={'header': { 'field_name': 'x-jws-signature', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFilePaymentConsentsRequests:
    application_jose_plus_jwe: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_file_consent3: Optional[shared.ObWriteFileConsent3] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_file_consent4: Optional[shared.ObWriteFileConsent3] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFilePaymentConsentsSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFilePaymentConsentsRequest:
    headers: CreateFilePaymentConsentsHeaders = field(default=None)
    request: CreateFilePaymentConsentsRequests = field(default=None)
    security: CreateFilePaymentConsentsSecurity = field(default=None)
    

@dataclass
class CreateFilePaymentConsentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_write_file_consent_response4: Optional[shared.ObWriteFileConsentResponse4] = field(default=None)
    status_code: int = field(default=None)
    

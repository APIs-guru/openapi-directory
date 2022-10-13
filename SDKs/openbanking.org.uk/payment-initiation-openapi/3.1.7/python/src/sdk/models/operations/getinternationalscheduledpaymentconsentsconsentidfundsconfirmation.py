from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationPathParams:
    consent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ConsentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationRequest:
    path_params: GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationPathParams = field(default=None)
    headers: GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationHeaders = field(default=None)
    security: GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationSecurity = field(default=None)
    

@dataclass
class GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_write_funds_confirmation_response1: Optional[shared.ObWriteFundsConfirmationResponse1] = field(default=None)
    status_code: int = field(default=None)
    

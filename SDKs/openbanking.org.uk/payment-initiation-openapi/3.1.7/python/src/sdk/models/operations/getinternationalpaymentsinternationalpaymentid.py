from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInternationalPaymentsInternationalPaymentIDPathParams:
    international_payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'InternationalPaymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInternationalPaymentsInternationalPaymentIDHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInternationalPaymentsInternationalPaymentIDSecurity:
    tppo_auth2_security: shared.SchemeTppoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInternationalPaymentsInternationalPaymentIDRequest:
    path_params: GetInternationalPaymentsInternationalPaymentIDPathParams = field(default=None)
    headers: GetInternationalPaymentsInternationalPaymentIDHeaders = field(default=None)
    security: GetInternationalPaymentsInternationalPaymentIDSecurity = field(default=None)
    

@dataclass
class GetInternationalPaymentsInternationalPaymentIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_write_international_response5: Optional[shared.ObWriteInternationalResponse5] = field(default=None)
    status_code: int = field(default=None)
    

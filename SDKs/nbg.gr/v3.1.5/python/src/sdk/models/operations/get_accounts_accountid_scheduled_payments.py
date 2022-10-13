from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDScheduledPaymentsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDScheduledPaymentsHeaders:
    sandbox_id: str = field(default=None, metadata={'header': { 'field_name': 'sandbox-id' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class GetAccountsAccountIDScheduledPaymentsSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAccountsAccountIDScheduledPaymentsRequest:
    path_params: GetAccountsAccountIDScheduledPaymentsPathParams = field(default=None)
    headers: GetAccountsAccountIDScheduledPaymentsHeaders = field(default=None)
    security: GetAccountsAccountIDScheduledPaymentsSecurity = field(default=None)
    

@dataclass
class GetAccountsAccountIDScheduledPaymentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_scheduled_payment3: Optional[shared.ObReadScheduledPayment3] = field(default=None)
    status_code: int = field(default=None)
    

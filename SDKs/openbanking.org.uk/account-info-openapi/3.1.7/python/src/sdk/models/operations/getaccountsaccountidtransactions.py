from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDTransactionsPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'AccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDTransactionsQueryParams:
    from_booking_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromBookingDateTime', 'style': 'form', 'explode': True }})
    to_booking_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'toBookingDateTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsAccountIDTransactionsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDTransactionsSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountsAccountIDTransactionsRequest:
    headers: GetAccountsAccountIDTransactionsHeaders = field()
    path_params: GetAccountsAccountIDTransactionsPathParams = field()
    query_params: GetAccountsAccountIDTransactionsQueryParams = field()
    security: GetAccountsAccountIDTransactionsSecurity = field()
    

@dataclass
class GetAccountsAccountIDTransactionsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_transaction6: Optional[shared.ObReadTransaction6] = field(default=None)
    

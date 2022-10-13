from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTransactionsQueryParams:
    from_booking_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromBookingDateTime', 'style': 'form', 'explode': True }})
    to_booking_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'toBookingDateTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class GetTransactionsSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransactionsRequest:
    query_params: GetTransactionsQueryParams = field(default=None)
    headers: GetTransactionsHeaders = field(default=None)
    security: GetTransactionsSecurity = field(default=None)
    

@dataclass
class GetTransactionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_transaction6: Optional[shared.ObReadTransaction6] = field(default=None)
    status_code: int = field(default=None)
    

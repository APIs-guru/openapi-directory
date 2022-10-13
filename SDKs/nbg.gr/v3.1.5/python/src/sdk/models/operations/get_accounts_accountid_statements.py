from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDStatementsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsQueryParams:
    from_statement_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromStatementDateTime', 'style': 'form', 'explode': True }})
    to_statement_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'toStatementDateTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsAccountIDStatementsHeaders:
    sandbox_id: str = field(default=None, metadata={'header': { 'field_name': 'sandbox-id' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class GetAccountsAccountIDStatementsSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAccountsAccountIDStatementsRequest:
    path_params: GetAccountsAccountIDStatementsPathParams = field(default=None)
    query_params: GetAccountsAccountIDStatementsQueryParams = field(default=None)
    headers: GetAccountsAccountIDStatementsHeaders = field(default=None)
    security: GetAccountsAccountIDStatementsSecurity = field(default=None)
    

@dataclass
class GetAccountsAccountIDStatementsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_statement2: Optional[shared.ObReadStatement2] = field(default=None)
    status_code: int = field(default=None)
    

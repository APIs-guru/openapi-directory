from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDStatementsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsQueryParams:
    from_statement_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromStatementDateTime', 'style': 'form', 'explode': True }})
    to_statement_date_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'toStatementDateTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsAccountIDStatementsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountsAccountIDStatementsRequest:
    path_params: GetAccountsAccountIDStatementsPathParams = field(default=None)
    query_params: GetAccountsAccountIDStatementsQueryParams = field(default=None)
    headers: GetAccountsAccountIDStatementsHeaders = field(default=None)
    security: GetAccountsAccountIDStatementsSecurity = field(default=None)
    

@dataclass
class GetAccountsAccountIDStatementsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_statement2: Optional[shared.ObReadStatement2] = field(default=None)
    status_code: int = field(default=None)
    

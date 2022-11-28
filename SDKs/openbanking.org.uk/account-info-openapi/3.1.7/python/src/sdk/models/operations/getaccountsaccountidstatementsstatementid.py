from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDStatementsStatementIDPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'AccountId', 'style': 'simple', 'explode': False }})
    statement_id: str = field(metadata={'path_param': { 'field_name': 'StatementId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDSecurity:
    psuo_auth2_security: shared.SchemePsuoAuth2Security = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDRequest:
    headers: GetAccountsAccountIDStatementsStatementIDHeaders = field()
    path_params: GetAccountsAccountIDStatementsStatementIDPathParams = field()
    security: GetAccountsAccountIDStatementsStatementIDSecurity = field()
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_statement2: Optional[shared.ObReadStatement2] = field(default=None)
    

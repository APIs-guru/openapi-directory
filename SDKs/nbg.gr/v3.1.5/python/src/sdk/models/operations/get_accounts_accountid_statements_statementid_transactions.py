from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDStatementsStatementIDTransactionsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    statement_id: str = field(default=None, metadata={'path_param': { 'field_name': 'statementId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDTransactionsHeaders:
    sandbox_id: str = field(default=None, metadata={'header': { 'field_name': 'sandbox-id', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDTransactionsSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDTransactionsRequest:
    path_params: GetAccountsAccountIDStatementsStatementIDTransactionsPathParams = field(default=None)
    headers: GetAccountsAccountIDStatementsStatementIDTransactionsHeaders = field(default=None)
    security: GetAccountsAccountIDStatementsStatementIDTransactionsSecurity = field(default=None)
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDTransactionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ob_error_response1: Optional[shared.ObErrorResponse1] = field(default=None)
    ob_read_transaction6: Optional[shared.ObReadTransaction6] = field(default=None)
    status_code: int = field(default=None)
    

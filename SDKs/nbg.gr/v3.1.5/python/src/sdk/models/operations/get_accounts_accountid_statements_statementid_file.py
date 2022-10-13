from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetAccountsAccountIDStatementsStatementIDFilePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    statement_id: str = field(default=None, metadata={'path_param': { 'field_name': 'statementId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileHeaders:
    sandbox_id: str = field(default=None, metadata={'header': { 'field_name': 'sandbox-id' }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent' }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date' }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address' }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id' }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileRequest:
    path_params: GetAccountsAccountIDStatementsStatementIDFilePathParams = field(default=None)
    headers: GetAccountsAccountIDStatementsStatementIDFileHeaders = field(default=None)
    security: GetAccountsAccountIDStatementsStatementIDFileSecurity = field(default=None)
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_accounts_account_id_statements_statement_id_file_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

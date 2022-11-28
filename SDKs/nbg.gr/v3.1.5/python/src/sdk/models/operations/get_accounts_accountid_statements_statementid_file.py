from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDStatementsStatementIDFilePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    statement_id: str = field(metadata={'path_param': { 'field_name': 'statementId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileHeaders:
    sandbox_id: str = field(metadata={'header': { 'field_name': 'sandbox-id', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileRequest:
    headers: GetAccountsAccountIDStatementsStatementIDFileHeaders = field()
    path_params: GetAccountsAccountIDStatementsStatementIDFilePathParams = field()
    security: GetAccountsAccountIDStatementsStatementIDFileSecurity = field()
    

@dataclass
class GetAccountsAccountIDStatementsStatementIDFileResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_accounts_account_id_statements_statement_id_file_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAccountsQueryParams:
    account: str = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAccounts200ApplicationJSON:
    accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    

@dataclass
class GetAccountsResponse:
    content_type: str = field(default=None)
    get_accounts_200_application_json_object: Optional[GetAccounts200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    

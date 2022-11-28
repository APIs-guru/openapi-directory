from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAccountsQueryParams:
    account: str = field(metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetAccounts200ApplicationJSON:
    accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    

@dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = field()
    

@dataclass
class GetAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    get_accounts_200_application_json_object: Optional[GetAccounts200ApplicationJSON] = field(default=None)
    

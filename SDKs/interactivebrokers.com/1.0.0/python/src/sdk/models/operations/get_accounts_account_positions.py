from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAccountsAccountPositionsPathParams:
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountPositionsRequest:
    path_params: GetAccountsAccountPositionsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAccountsAccountPositions200ApplicationJSON:
    average_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageCost' }})
    contract_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContractId' }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Position' }})
    

@dataclass
class GetAccountsAccountPositionsResponse:
    content_type: str = field(default=None)
    get_accounts_account_positions_200_application_json_objects: Optional[List[GetAccountsAccountPositions200ApplicationJSON]] = field(default=None)
    status_code: int = field(default=None)
    

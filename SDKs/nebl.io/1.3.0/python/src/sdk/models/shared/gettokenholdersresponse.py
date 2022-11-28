from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetTokenHoldersResponseHolders:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    

@dataclass_json
@dataclass
class GetTokenHoldersResponse:
    aggregation_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPolicy') }})
    divibility: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divibility') }})
    holders: Optional[List[GetTokenHoldersResponseHolders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holders') }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    some_utxo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('someUtxo') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    

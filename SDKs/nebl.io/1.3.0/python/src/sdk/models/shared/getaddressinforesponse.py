from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAddressInfoResponseUtxosTokens:
    aggregation_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPolicy') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    divisibility: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisibility') }})
    issue_txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueTxid') }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenId') }})
    

@dataclass_json
@dataclass
class GetAddressInfoResponseUtxos:
    blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockheight') }})
    blocktime: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocktime') }})
    index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    script_pub_key: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptPubKey') }})
    tokens: Optional[List[GetAddressInfoResponseUtxosTokens]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txid') }})
    used: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GetAddressInfoResponse:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    utxos: Optional[List[GetAddressInfoResponseUtxos]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utxos') }})
    

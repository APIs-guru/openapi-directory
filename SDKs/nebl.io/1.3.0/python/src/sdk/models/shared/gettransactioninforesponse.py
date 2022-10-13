from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTransactionInfoResponseVinPreviousOutput:
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    asm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asm' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    req_sigs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reqSigs' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponseVinScriptSig:
    asm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asm' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponseVinTokens:
    aggregation_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationPolicy' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    divisibility: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'divisibility' }})
    issue_txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueTxid' }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponseVin:
    previous_output: Optional[GetTransactionInfoResponseVinPreviousOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousOutput' }})
    script_sig: Optional[GetTransactionInfoResponseVinScriptSig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptSig' }})
    sequence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    tokens: Optional[List[GetTransactionInfoResponseVinTokens]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    vout: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vout' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponseVoutScriptPubKey:
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    asm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asm' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    req_sigs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reqSigs' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponseVoutTokens:
    aggregation_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationPolicy' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    divisibility: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'divisibility' }})
    issue_txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueTxid' }})
    lock_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponseVout:
    blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockheight' }})
    n: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'n' }})
    script_pub_key: Optional[GetTransactionInfoResponseVoutScriptPubKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptPubKey' }})
    tokens: Optional[List[GetTransactionInfoResponseVoutTokens]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    used: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    used_blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedBlockheight' }})
    used_txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedTxid' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetTransactionInfoResponse:
    blockhash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockhash' }})
    blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockheight' }})
    blocktime: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocktime' }})
    confirmations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmations' }})
    fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    locktime: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locktime' }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    totalsent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalsent' }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vin: Optional[List[GetTransactionInfoResponseVin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vin' }})
    vout: Optional[List[GetTransactionInfoResponseVout]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vout' }})
    

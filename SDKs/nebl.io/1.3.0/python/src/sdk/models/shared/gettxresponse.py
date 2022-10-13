from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTxResponseVinScriptSig:
    asm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asm' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    

@dataclass_json
@dataclass
class GetTxResponseVin:
    n: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'n' }})
    script_sig: Optional[GetTxResponseVinScriptSig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptSig' }})
    sequence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_sat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSat' }})
    vout: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vout' }})
    

@dataclass_json
@dataclass
class GetTxResponseVoutScriptPubKey:
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    asm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asm' }})
    hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hex' }})
    req_sigs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reqSigs' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetTxResponseVout:
    blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockheight' }})
    n: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'n' }})
    script_pub_key: Optional[GetTxResponseVoutScriptPubKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptPubKey' }})
    used: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    used_blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedBlockheight' }})
    used_txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedTxid' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetTxResponse:
    blockhash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockhash' }})
    blockheight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockheight' }})
    blocktime: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocktime' }})
    confirmations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmations' }})
    fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee' }})
    fees: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fees' }})
    locktime: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locktime' }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    totalsent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalsent' }})
    txid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    value_in: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueIn' }})
    value_out: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueOut' }})
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vin: Optional[List[GetTxResponseVin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vin' }})
    vout: Optional[List[GetTxResponseVout]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vout' }})
    

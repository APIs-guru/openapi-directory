from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetMarketdataSnapshotRequestBody:
    conid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conid') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetMarketdataSnapshot200ApplicationJSONBid:
    market: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class GetMarketdataSnapshot200ApplicationJSONClosing:
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclass
class GetMarketdataSnapshot200ApplicationJSONOffer:
    market: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class GetMarketdataSnapshot200ApplicationJSONTrade:
    market: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclass
class GetMarketdataSnapshot200ApplicationJSON:
    bid: Optional[GetMarketdataSnapshot200ApplicationJSONBid] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bid') }})
    closing: Optional[GetMarketdataSnapshot200ApplicationJSONClosing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Closing') }})
    complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Complete') }})
    conid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conid') }})
    offer: Optional[GetMarketdataSnapshot200ApplicationJSONOffer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offer') }})
    temporality: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Temporality') }})
    trade: Optional[GetMarketdataSnapshot200ApplicationJSONTrade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trade') }})
    

@dataclass
class GetMarketdataSnapshotRequest:
    request: List[GetMarketdataSnapshotRequestBody] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetMarketdataSnapshotResponse:
    content_type: str = field()
    status_code: int = field()
    get_marketdata_snapshot_200_application_json_objects: Optional[List[GetMarketdataSnapshot200ApplicationJSON]] = field(default=None)
    

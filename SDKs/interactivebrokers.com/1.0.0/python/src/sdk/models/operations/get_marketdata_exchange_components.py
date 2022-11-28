from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetMarketdataExchangeComponents200ApplicationJSONMapping:
    bit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bit') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    

@dataclass_json
@dataclass
class GetMarketdataExchangeComponents200ApplicationJSON:
    complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Complete') }})
    con_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConId') }})
    mapping: Optional[List[GetMarketdataExchangeComponents200ApplicationJSONMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping') }})
    

@dataclass
class GetMarketdataExchangeComponentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_marketdata_exchange_components_200_application_json_objects: Optional[List[GetMarketdataExchangeComponents200ApplicationJSON]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import candlestickdata
from . import candlestickdomain


@dataclass_json
@dataclass
class CandlestickChartSpec:
    data: Optional[List[candlestickdata.CandlestickData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    domain: Optional[candlestickdomain.CandlestickDomain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    

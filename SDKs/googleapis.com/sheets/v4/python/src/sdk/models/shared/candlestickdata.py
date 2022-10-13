from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import candlestickseries
from . import candlestickseries
from . import candlestickseries
from . import candlestickseries


@dataclass_json
@dataclass
class CandlestickData:
    close_series: Optional[candlestickseries.CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeSeries' }})
    high_series: Optional[candlestickseries.CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highSeries' }})
    low_series: Optional[candlestickseries.CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowSeries' }})
    open_series: Optional[candlestickseries.CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openSeries' }})
    

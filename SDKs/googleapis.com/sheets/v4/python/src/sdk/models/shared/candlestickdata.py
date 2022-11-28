from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CandlestickData:
    r"""CandlestickData
    The Candlestick chart data, each containing the low, open, close, and high values for a series.
    """
    
    close_series: Optional[CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeSeries') }})
    high_series: Optional[CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highSeries') }})
    low_series: Optional[CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowSeries') }})
    open_series: Optional[CandlestickSeries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openSeries') }})
    

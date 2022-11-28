from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CandlestickSeries:
    r"""CandlestickSeries
    The series of a CandlestickData.
    """
    
    data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

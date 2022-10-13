from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import chartdata


@dataclass_json
@dataclass
class CandlestickDomain:
    data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    reversed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reversed' }})
    

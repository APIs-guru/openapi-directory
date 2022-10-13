from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import obcashbalance1


@dataclass_json
@dataclass
class ObReadDataBalance1:
    balance: List[obcashbalance1.ObCashBalance1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Balance' }})
    

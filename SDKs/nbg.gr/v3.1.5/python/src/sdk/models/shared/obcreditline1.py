from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obexternallimittype1code_enum


@dataclass_json
@dataclass
class ObCreditLine1:
    amount: Optional[obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    included: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Included' }})
    type: Optional[obexternallimittype1code_enum.ObExternalLimitType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

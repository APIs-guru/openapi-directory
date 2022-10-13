from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExchangeRateInformation1RateTypeEnum(str, Enum):
    SPOT = "SPOT"
    SALE = "SALE"
    AGRD = "AGRD"


@dataclass_json
@dataclass
class ExchangeRateInformation1:
    contract_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contractIdentification' }})
    exchange_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRate' }})
    rate_type: Optional[ExchangeRateInformation1RateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateType' }})
    

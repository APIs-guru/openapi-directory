from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import money
from . import compensationrange

class CompensationEntryTypeEnum(str, Enum):
    COMPENSATION_TYPE_UNSPECIFIED = "COMPENSATION_TYPE_UNSPECIFIED"
    BASE = "BASE"
    BONUS = "BONUS"
    SIGNING_BONUS = "SIGNING_BONUS"
    EQUITY = "EQUITY"
    PROFIT_SHARING = "PROFIT_SHARING"
    COMMISSIONS = "COMMISSIONS"
    TIPS = "TIPS"
    OTHER_COMPENSATION_TYPE = "OTHER_COMPENSATION_TYPE"

class CompensationEntryUnitEnum(str, Enum):
    COMPENSATION_UNIT_UNSPECIFIED = "COMPENSATION_UNIT_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"
    ONE_TIME = "ONE_TIME"
    OTHER_COMPENSATION_UNIT = "OTHER_COMPENSATION_UNIT"


@dataclass_json
@dataclass
class CompensationEntry:
    amount: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expected_units_per_year: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedUnitsPerYear' }})
    range: Optional[compensationrange.CompensationRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    type: Optional[CompensationEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit: Optional[CompensationEntryUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    

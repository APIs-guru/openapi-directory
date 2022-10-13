from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money

class RateDetailsInventorySourceRateTypeEnum(str, Enum):
    INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED"
    INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED"
    INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR"
    INVENTORY_SOURCE_RATE_TYPE_CPD = "INVENTORY_SOURCE_RATE_TYPE_CPD"
    INVENTORY_SOURCE_RATE_TYPE_FLAT = "INVENTORY_SOURCE_RATE_TYPE_FLAT"


@dataclass_json
@dataclass
class RateDetails:
    inventory_source_rate_type: Optional[RateDetailsInventorySourceRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceRateType' }})
    minimum_spend: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumSpend' }})
    rate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    units_purchased: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitsPurchased' }})
    

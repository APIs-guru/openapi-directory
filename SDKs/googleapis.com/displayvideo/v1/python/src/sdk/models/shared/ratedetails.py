from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RateDetailsInventorySourceRateTypeEnum(str, Enum):
    INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED"
    INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED"
    INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR"
    INVENTORY_SOURCE_RATE_TYPE_CPD = "INVENTORY_SOURCE_RATE_TYPE_CPD"
    INVENTORY_SOURCE_RATE_TYPE_FLAT = "INVENTORY_SOURCE_RATE_TYPE_FLAT"


@dataclass_json
@dataclass
class RateDetails:
    r"""RateDetails
    The rate related settings of the inventory source.
    """
    
    inventory_source_rate_type: Optional[RateDetailsInventorySourceRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceRateType') }})
    minimum_spend: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumSpend') }})
    rate: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    units_purchased: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitsPurchased') }})
    

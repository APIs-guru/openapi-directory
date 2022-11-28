from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1PricePhasePeriodTypeEnum(str, Enum):
    PERIOD_TYPE_UNSPECIFIED = "PERIOD_TYPE_UNSPECIFIED"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class GoogleCloudChannelV1PricePhase:
    r"""GoogleCloudChannelV1PricePhase
    Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
    """
    
    first_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPeriod') }})
    last_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPeriod') }})
    period_type: Optional[GoogleCloudChannelV1PricePhasePeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    price: Optional[GoogleCloudChannelV1Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_tiers: Optional[List[GoogleCloudChannelV1PriceTier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceTiers') }})
    

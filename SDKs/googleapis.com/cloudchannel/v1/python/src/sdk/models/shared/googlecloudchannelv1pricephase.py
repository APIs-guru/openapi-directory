from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1price
from . import googlecloudchannelv1pricetier

class GoogleCloudChannelV1PricePhasePeriodTypeEnum(str, Enum):
    PERIOD_TYPE_UNSPECIFIED = "PERIOD_TYPE_UNSPECIFIED"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class GoogleCloudChannelV1PricePhase:
    first_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPeriod' }})
    last_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPeriod' }})
    period_type: Optional[GoogleCloudChannelV1PricePhasePeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodType' }})
    price: Optional[googlecloudchannelv1price.GoogleCloudChannelV1Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_tiers: Optional[List[googlecloudchannelv1pricetier.GoogleCloudChannelV1PriceTier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceTiers' }})
    

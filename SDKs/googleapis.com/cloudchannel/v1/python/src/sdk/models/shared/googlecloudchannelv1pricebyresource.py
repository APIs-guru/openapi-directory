from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1PriceByResourceResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    SEAT = "SEAT"
    MAU = "MAU"
    GB = "GB"
    LICENSED_USER = "LICENSED_USER"
    MINUTES = "MINUTES"
    IAAS_USAGE = "IAAS_USAGE"
    SUBSCRIPTION = "SUBSCRIPTION"


@dataclass_json
@dataclass
class GoogleCloudChannelV1PriceByResource:
    r"""GoogleCloudChannelV1PriceByResource
    Represents price by resource type.
    """
    
    price: Optional[GoogleCloudChannelV1Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_phases: Optional[List[GoogleCloudChannelV1PricePhase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricePhases') }})
    resource_type: Optional[GoogleCloudChannelV1PriceByResourceResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

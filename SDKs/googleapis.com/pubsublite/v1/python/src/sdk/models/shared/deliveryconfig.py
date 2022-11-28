from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeliveryConfigDeliveryRequirementEnum(str, Enum):
    DELIVERY_REQUIREMENT_UNSPECIFIED = "DELIVERY_REQUIREMENT_UNSPECIFIED"
    DELIVER_IMMEDIATELY = "DELIVER_IMMEDIATELY"
    DELIVER_AFTER_STORED = "DELIVER_AFTER_STORED"


@dataclass_json
@dataclass
class DeliveryConfig:
    r"""DeliveryConfig
    The settings for a subscription's message delivery.
    """
    
    delivery_requirement: Optional[DeliveryConfigDeliveryRequirementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryRequirement') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeliveryConfigDeliveryRequirementEnum(str, Enum):
    DELIVERY_REQUIREMENT_UNSPECIFIED = "DELIVERY_REQUIREMENT_UNSPECIFIED"
    DELIVER_IMMEDIATELY = "DELIVER_IMMEDIATELY"
    DELIVER_AFTER_STORED = "DELIVER_AFTER_STORED"


@dataclass_json
@dataclass
class DeliveryConfig:
    delivery_requirement: Optional[DeliveryConfigDeliveryRequirementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryRequirement' }})
    

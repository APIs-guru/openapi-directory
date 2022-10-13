from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CarrierAndIspTargetingOptionDetailsTypeEnum(str, Enum):
    CARRIER_AND_ISP_TYPE_UNSPECIFIED = "CARRIER_AND_ISP_TYPE_UNSPECIFIED"
    CARRIER_AND_ISP_TYPE_ISP = "CARRIER_AND_ISP_TYPE_ISP"
    CARRIER_AND_ISP_TYPE_CARRIER = "CARRIER_AND_ISP_TYPE_CARRIER"


@dataclass_json
@dataclass
class CarrierAndIspTargetingOptionDetails:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    type: Optional[CarrierAndIspTargetingOptionDetailsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

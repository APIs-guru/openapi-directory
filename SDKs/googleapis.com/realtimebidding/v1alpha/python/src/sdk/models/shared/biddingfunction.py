from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BiddingFunctionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"

class BiddingFunctionTypeEnum(str, Enum):
    FUNCTION_TYPE_UNSPECIFIED = "FUNCTION_TYPE_UNSPECIFIED"
    TURTLEDOVE_SIMULATION_BIDDING_FUNCTION = "TURTLEDOVE_SIMULATION_BIDDING_FUNCTION"
    FLEDGE_BIDDING_FUNCTION = "FLEDGE_BIDDING_FUNCTION"


@dataclass_json
@dataclass
class BiddingFunction:
    bidding_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'biddingFunction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[BiddingFunctionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[BiddingFunctionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

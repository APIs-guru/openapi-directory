from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""BiddingFunction
    The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
    """
    
    bidding_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biddingFunction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[BiddingFunctionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[BiddingFunctionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class BiddingFunctionInput:
    r"""BiddingFunctionInput
    The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
    """
    
    bidding_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biddingFunction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[BiddingFunctionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

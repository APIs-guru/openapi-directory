from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomBiddingScriptStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class CustomBiddingScript:
    r"""CustomBiddingScript
    A single custom bidding script.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    custom_bidding_algorithm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingAlgorithmId') }})
    custom_bidding_script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingScriptId') }})
    errors: Optional[List[ScriptError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script: Optional[CustomBiddingScriptRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    state: Optional[CustomBiddingScriptStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class CustomBiddingScriptInput:
    r"""CustomBiddingScriptInput
    A single custom bidding script.
    """
    
    script: Optional[CustomBiddingScriptRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

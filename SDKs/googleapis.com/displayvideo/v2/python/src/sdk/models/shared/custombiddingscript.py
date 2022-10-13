from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import scripterror
from . import custombiddingscriptref

class CustomBiddingScriptStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class CustomBiddingScript:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    custom_bidding_algorithm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customBiddingAlgorithmId' }})
    custom_bidding_script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customBiddingScriptId' }})
    errors: Optional[List[scripterror.ScriptError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script: Optional[custombiddingscriptref.CustomBiddingScriptRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    state: Optional[CustomBiddingScriptStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

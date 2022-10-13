from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ActionFunctionFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass_json
@dataclass
class ActionFunction:
    function_source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionSource' }})
    function_type: ActionFunctionFunctionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionType' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

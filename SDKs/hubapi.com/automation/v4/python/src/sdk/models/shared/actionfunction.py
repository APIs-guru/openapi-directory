from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActionFunctionFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass_json
@dataclass
class ActionFunction:
    r"""ActionFunction
    A serverless function associated with this custom workflow action.
    """
    
    function_source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionSource') }})
    function_type: ActionFunctionFunctionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionType') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActionFunctionIdentifierFunctionTypeEnum(str, Enum):
    PRE_ACTION_EXECUTION = "PRE_ACTION_EXECUTION"
    PRE_FETCH_OPTIONS = "PRE_FETCH_OPTIONS"
    POST_FETCH_OPTIONS = "POST_FETCH_OPTIONS"


@dataclass_json
@dataclass
class ActionFunctionIdentifier:
    r"""ActionFunctionIdentifier
    A serverless function associated with this custom workflow action.
    """
    
    function_type: ActionFunctionIdentifierFunctionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionType') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

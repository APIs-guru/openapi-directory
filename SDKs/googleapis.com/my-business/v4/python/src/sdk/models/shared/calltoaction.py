from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CallToActionActionTypeEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    BOOK = "BOOK"
    ORDER = "ORDER"
    SHOP = "SHOP"
    LEARN_MORE = "LEARN_MORE"
    SIGN_UP = "SIGN_UP"
    GET_OFFER = "GET_OFFER"
    CALL = "CALL"


@dataclass_json
@dataclass
class CallToAction:
    r"""CallToAction
    An action that is performed when the user clicks through the post
    """
    
    action_type: Optional[CallToActionActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

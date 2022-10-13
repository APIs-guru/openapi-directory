from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    action_type: Optional[CallToActionActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actionconfirmationbody

class ActionHookActionBodyHTTPMethodEnum(str, Enum):
    CONNECT = "CONNECT"
    DELETE = "DELETE"
    GET = "GET"
    HEAD = "HEAD"
    OPTIONS = "OPTIONS"
    PATCH = "PATCH"
    POST = "POST"
    PUT = "PUT"
    TRACE = "TRACE"

class ActionHookActionBodyTypeEnum(str, Enum):
    ACTION_HOOK = "ACTION_HOOK"


@dataclass_json
@dataclass
class ActionHookActionBody:
    confirmation: Optional[actionconfirmationbody.ActionConfirmationBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmation' }})
    http_method: ActionHookActionBodyHTTPMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    property_names_included: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyNamesIncluded' }})
    type: ActionHookActionBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

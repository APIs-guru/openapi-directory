from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    http_method: ActionHookActionBodyHTTPMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    property_names_included: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyNamesIncluded') }})
    type: ActionHookActionBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    confirmation: Optional[ActionConfirmationBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

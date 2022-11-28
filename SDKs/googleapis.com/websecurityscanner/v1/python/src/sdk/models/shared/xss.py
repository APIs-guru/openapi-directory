from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class XSSAttackVectorEnum(str, Enum):
    ATTACK_VECTOR_UNSPECIFIED = "ATTACK_VECTOR_UNSPECIFIED"
    LOCAL_STORAGE = "LOCAL_STORAGE"
    SESSION_STORAGE = "SESSION_STORAGE"
    WINDOW_NAME = "WINDOW_NAME"
    REFERRER = "REFERRER"
    FORM_INPUT = "FORM_INPUT"
    COOKIE = "COOKIE"
    POST_MESSAGE = "POST_MESSAGE"
    GET_PARAMETERS = "GET_PARAMETERS"
    URL_FRAGMENT = "URL_FRAGMENT"
    HTML_COMMENT = "HTML_COMMENT"
    POST_PARAMETERS = "POST_PARAMETERS"
    PROTOCOL = "PROTOCOL"
    STORED_XSS = "STORED_XSS"
    SAME_ORIGIN = "SAME_ORIGIN"
    USER_CONTROLLABLE_URL = "USER_CONTROLLABLE_URL"


@dataclass_json
@dataclass
class XSS:
    r"""XSS
    Information reported for an XSS.
    """
    
    attack_vector: Optional[XSSAttackVectorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attackVector') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    stack_traces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTraces') }})
    stored_xss_seeding_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedXssSeedingUrl') }})
    

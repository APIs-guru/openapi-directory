from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContentMatcherMatcherEnum(str, Enum):
    CONTENT_MATCHER_OPTION_UNSPECIFIED = "CONTENT_MATCHER_OPTION_UNSPECIFIED"
    CONTAINS_STRING = "CONTAINS_STRING"
    NOT_CONTAINS_STRING = "NOT_CONTAINS_STRING"
    MATCHES_REGEX = "MATCHES_REGEX"
    NOT_MATCHES_REGEX = "NOT_MATCHES_REGEX"
    MATCHES_JSON_PATH = "MATCHES_JSON_PATH"
    NOT_MATCHES_JSON_PATH = "NOT_MATCHES_JSON_PATH"


@dataclass_json
@dataclass
class ContentMatcher:
    r"""ContentMatcher
    Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    json_path_matcher: Optional[JSONPathMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonPathMatcher') }})
    matcher: Optional[ContentMatcherMatcherEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matcher') }})
    

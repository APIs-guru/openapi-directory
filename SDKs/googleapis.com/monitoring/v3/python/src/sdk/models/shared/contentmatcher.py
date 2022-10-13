from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jsonpathmatcher

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
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    json_path_matcher: Optional[jsonpathmatcher.JSONPathMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonPathMatcher' }})
    matcher: Optional[ContentMatcherMatcherEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matcher' }})
    

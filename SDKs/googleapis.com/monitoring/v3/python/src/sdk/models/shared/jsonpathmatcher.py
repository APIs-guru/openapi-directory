from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class JSONPathMatcherJSONMatcherEnum(str, Enum):
    JSON_PATH_MATCHER_OPTION_UNSPECIFIED = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED"
    EXACT_MATCH = "EXACT_MATCH"
    REGEX_MATCH = "REGEX_MATCH"


@dataclass_json
@dataclass
class JSONPathMatcher:
    json_matcher: Optional[JSONPathMatcherJSONMatcherEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonMatcher' }})
    json_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonPath' }})
    

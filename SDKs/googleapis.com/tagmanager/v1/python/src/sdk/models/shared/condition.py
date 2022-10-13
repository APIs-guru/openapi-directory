from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import parameter

class ConditionTypeEnum(str, Enum):
    EQUALS = "equals"
    CONTAINS = "contains"
    STARTS_WITH = "startsWith"
    ENDS_WITH = "endsWith"
    MATCH_REGEX = "matchRegex"
    GREATER = "greater"
    GREATER_OR_EQUALS = "greaterOrEquals"
    LESS = "less"
    LESS_OR_EQUALS = "lessOrEquals"
    CSS_SELECTOR = "cssSelector"
    URL_MATCHES = "urlMatches"


@dataclass_json
@dataclass
class Condition:
    parameter: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    type: Optional[ConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

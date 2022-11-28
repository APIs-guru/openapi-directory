from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConditionTypeEnum(str, Enum):
    CONDITION_TYPE_UNSPECIFIED = "conditionTypeUnspecified"
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
    r"""Condition
    Represents a predicate.
    """
    
    parameter: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    type: Optional[ConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

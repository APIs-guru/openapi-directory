from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum(str, Enum):
    MATCH_TYPE_UNSPECIFIED = "MATCH_TYPE_UNSPECIFIED"
    INTENT = "INTENT"
    DIRECT_INTENT = "DIRECT_INTENT"
    PARAMETER_FILLING = "PARAMETER_FILLING"
    NO_MATCH = "NO_MATCH"
    NO_INPUT = "NO_INPUT"
    EVENT = "EVENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Match:
    r"""GoogleCloudDialogflowCxV3beta1Match
    Represents one match result of MatchIntent.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    intent: Optional[GoogleCloudDialogflowCxV3beta1Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    match_type: Optional[GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    resolved_input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedInput') }})
    

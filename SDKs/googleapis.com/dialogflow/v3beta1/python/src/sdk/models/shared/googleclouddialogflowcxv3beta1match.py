from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1intent

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
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    intent: Optional[googleclouddialogflowcxv3beta1intent.GoogleCloudDialogflowCxV3beta1Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    match_type: Optional[GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    resolved_input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedInput' }})
    

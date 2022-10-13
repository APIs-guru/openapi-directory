from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1suggestion


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1CompileSuggestionResponse:
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    suggestion: Optional[googleclouddialogflowv2beta1suggestion.GoogleCloudDialogflowV2beta1Suggestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    

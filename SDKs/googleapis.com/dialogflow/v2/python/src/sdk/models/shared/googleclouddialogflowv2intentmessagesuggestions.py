from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagesuggestion


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageSuggestions:
    suggestions: Optional[List[googleclouddialogflowv2intentmessagesuggestion.GoogleCloudDialogflowV2IntentMessageSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    

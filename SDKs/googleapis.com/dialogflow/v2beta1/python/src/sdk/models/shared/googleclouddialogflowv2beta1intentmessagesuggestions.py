from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagesuggestion


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageSuggestions:
    suggestions: Optional[List[googleclouddialogflowv2beta1intentmessagesuggestion.GoogleCloudDialogflowV2beta1IntentMessageSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    

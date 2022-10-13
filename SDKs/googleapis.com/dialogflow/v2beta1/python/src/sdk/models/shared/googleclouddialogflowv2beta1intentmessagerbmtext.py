from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagerbmsuggestion


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmText:
    rbm_suggestion: Optional[List[googleclouddialogflowv2beta1intentmessagerbmsuggestion.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rbmSuggestion' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

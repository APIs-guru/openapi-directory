from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia
from . import googleclouddialogflowv2beta1intentmessagerbmsuggestion


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    media: Optional[googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    suggestions: Optional[List[googleclouddialogflowv2beta1intentmessagerbmsuggestion.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

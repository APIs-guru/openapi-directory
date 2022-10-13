from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagerbmsuggestedaction
from . import googleclouddialogflowv2beta1intentmessagerbmsuggestedreply


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion:
    action: Optional[googleclouddialogflowv2beta1intentmessagerbmsuggestedaction.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    reply: Optional[googleclouddialogflowv2beta1intentmessagerbmsuggestedreply.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply' }})
    

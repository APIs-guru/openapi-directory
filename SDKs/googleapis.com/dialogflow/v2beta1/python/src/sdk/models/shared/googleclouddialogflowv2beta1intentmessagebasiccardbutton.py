from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagebasiccardbuttonopenuriaction


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton:
    open_uri_action: Optional[googleclouddialogflowv2beta1intentmessagebasiccardbuttonopenuriaction.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openUriAction' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

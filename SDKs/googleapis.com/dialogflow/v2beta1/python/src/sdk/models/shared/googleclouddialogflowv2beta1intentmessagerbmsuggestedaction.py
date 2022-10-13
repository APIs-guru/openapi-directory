from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial
from . import googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction:
    dial: Optional[googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dial' }})
    open_url: Optional[googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openUrl' }})
    postback_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postbackData' }})
    share_location: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareLocation' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

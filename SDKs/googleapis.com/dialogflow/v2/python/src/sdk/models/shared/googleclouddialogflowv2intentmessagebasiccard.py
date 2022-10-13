from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagebasiccardbutton
from . import googleclouddialogflowv2intentmessageimage


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageBasicCard:
    buttons: Optional[List[googleclouddialogflowv2intentmessagebasiccardbutton.GoogleCloudDialogflowV2IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    formatted_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedText' }})
    image: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

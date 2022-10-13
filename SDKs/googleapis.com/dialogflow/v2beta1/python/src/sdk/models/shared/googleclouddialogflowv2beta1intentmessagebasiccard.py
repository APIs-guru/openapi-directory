from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagebasiccardbutton
from . import googleclouddialogflowv2beta1intentmessageimage


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBasicCard:
    buttons: Optional[List[googleclouddialogflowv2beta1intentmessagebasiccardbutton.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    formatted_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedText' }})
    image: Optional[googleclouddialogflowv2beta1intentmessageimage.GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

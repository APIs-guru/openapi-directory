from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessageimage
from . import googleclouddialogflowv2beta1intentmessageselectiteminfo


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageListSelectItem:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    image: Optional[googleclouddialogflowv2beta1intentmessageimage.GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    info: Optional[googleclouddialogflowv2beta1intentmessageselectiteminfo.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

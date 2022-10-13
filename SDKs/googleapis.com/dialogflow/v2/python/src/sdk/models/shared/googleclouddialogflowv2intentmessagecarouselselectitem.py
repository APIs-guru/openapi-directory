from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessageimage
from . import googleclouddialogflowv2intentmessageselectiteminfo


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageCarouselSelectItem:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    image: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    info: Optional[googleclouddialogflowv2intentmessageselectiteminfo.GoogleCloudDialogflowV2IntentMessageSelectItemInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

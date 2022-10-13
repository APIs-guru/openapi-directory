from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditem

class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum(str, Enum):
    IMAGE_DISPLAY_OPTIONS_UNSPECIFIED = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
    GRAY = "GRAY"
    WHITE = "WHITE"
    CROPPED = "CROPPED"
    BLURRED_BACKGROUND = "BLURRED_BACKGROUND"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard:
    image_display_options: Optional[GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDisplayOptions' }})
    items: Optional[List[googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditem.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditem

class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum(str, Enum):
    IMAGE_DISPLAY_OPTIONS_UNSPECIFIED = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
    GRAY = "GRAY"
    WHITE = "WHITE"
    CROPPED = "CROPPED"
    BLURRED_BACKGROUND = "BLURRED_BACKGROUND"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard:
    image_display_options: Optional[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDisplayOptions' }})
    items: Optional[List[googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditem.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    

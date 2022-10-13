from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagerbmcardcontent

class GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum(str, Enum):
    CARD_ORIENTATION_UNSPECIFIED = "CARD_ORIENTATION_UNSPECIFIED"
    HORIZONTAL = "HORIZONTAL"
    VERTICAL = "VERTICAL"

class GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum(str, Enum):
    THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED = "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED"
    LEFT = "LEFT"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard:
    card_content: Optional[googleclouddialogflowv2beta1intentmessagerbmcardcontent.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardContent' }})
    card_orientation: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardOrientation' }})
    thumbnail_image_alignment: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailImageAlignment' }})
    

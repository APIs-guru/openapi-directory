from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard
    Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
    """
    
    card_content: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardContent') }})
    card_orientation: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardOrientation') }})
    thumbnail_image_alignment: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailImageAlignment') }})
    

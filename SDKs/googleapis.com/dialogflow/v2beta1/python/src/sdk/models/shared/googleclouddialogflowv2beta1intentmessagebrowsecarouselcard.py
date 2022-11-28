from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum(str, Enum):
    IMAGE_DISPLAY_OPTIONS_UNSPECIFIED = "IMAGE_DISPLAY_OPTIONS_UNSPECIFIED"
    GRAY = "GRAY"
    WHITE = "WHITE"
    CROPPED = "CROPPED"
    BLURRED_BACKGROUND = "BLURRED_BACKGROUND"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard:
    r"""GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard
    Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
    """
    
    image_display_options: Optional[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDisplayOptions') }})
    items: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    

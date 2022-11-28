from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum(str, Enum):
    CARD_WIDTH_UNSPECIFIED = "CARD_WIDTH_UNSPECIFIED"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard
    Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
    """
    
    card_contents: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardContents') }})
    card_width: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardWidth') }})
    

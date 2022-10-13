from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagerbmcardcontent

class GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum(str, Enum):
    CARD_WIDTH_UNSPECIFIED = "CARD_WIDTH_UNSPECIFIED"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard:
    card_contents: Optional[List[googleclouddialogflowv2beta1intentmessagerbmcardcontent.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardContents' }})
    card_width: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardWidth' }})
    

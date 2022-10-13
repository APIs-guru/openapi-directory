from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagebasiccard
from . import googleclouddialogflowv2intentmessagebrowsecarouselcard
from . import googleclouddialogflowv2intentmessagecard
from . import googleclouddialogflowv2intentmessagecarouselselect
from . import googleclouddialogflowv2intentmessageimage
from . import googleclouddialogflowv2intentmessagelinkoutsuggestion
from . import googleclouddialogflowv2intentmessagelistselect
from . import googleclouddialogflowv2intentmessagemediacontent
from . import googleclouddialogflowv2intentmessagequickreplies
from . import googleclouddialogflowv2intentmessagesimpleresponses
from . import googleclouddialogflowv2intentmessagesuggestions
from . import googleclouddialogflowv2intentmessagetablecard
from . import googleclouddialogflowv2intentmessagetext

class GoogleCloudDialogflowV2IntentMessagePlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    FACEBOOK = "FACEBOOK"
    SLACK = "SLACK"
    TELEGRAM = "TELEGRAM"
    KIK = "KIK"
    SKYPE = "SKYPE"
    LINE = "LINE"
    VIBER = "VIBER"
    ACTIONS_ON_GOOGLE = "ACTIONS_ON_GOOGLE"
    GOOGLE_HANGOUTS = "GOOGLE_HANGOUTS"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessage:
    basic_card: Optional[googleclouddialogflowv2intentmessagebasiccard.GoogleCloudDialogflowV2IntentMessageBasicCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicCard' }})
    browse_carousel_card: Optional[googleclouddialogflowv2intentmessagebrowsecarouselcard.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browseCarouselCard' }})
    card: Optional[googleclouddialogflowv2intentmessagecard.GoogleCloudDialogflowV2IntentMessageCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    carousel_select: Optional[googleclouddialogflowv2intentmessagecarouselselect.GoogleCloudDialogflowV2IntentMessageCarouselSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carouselSelect' }})
    image: Optional[googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    link_out_suggestion: Optional[googleclouddialogflowv2intentmessagelinkoutsuggestion.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkOutSuggestion' }})
    list_select: Optional[googleclouddialogflowv2intentmessagelistselect.GoogleCloudDialogflowV2IntentMessageListSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listSelect' }})
    media_content: Optional[googleclouddialogflowv2intentmessagemediacontent.GoogleCloudDialogflowV2IntentMessageMediaContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaContent' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    platform: Optional[GoogleCloudDialogflowV2IntentMessagePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    quick_replies: Optional[googleclouddialogflowv2intentmessagequickreplies.GoogleCloudDialogflowV2IntentMessageQuickReplies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quickReplies' }})
    simple_responses: Optional[googleclouddialogflowv2intentmessagesimpleresponses.GoogleCloudDialogflowV2IntentMessageSimpleResponses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleResponses' }})
    suggestions: Optional[googleclouddialogflowv2intentmessagesuggestions.GoogleCloudDialogflowV2IntentMessageSuggestions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    table_card: Optional[googleclouddialogflowv2intentmessagetablecard.GoogleCloudDialogflowV2IntentMessageTableCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCard' }})
    text: Optional[googleclouddialogflowv2intentmessagetext.GoogleCloudDialogflowV2IntentMessageText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudDialogflowV2IntentMessage
    A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
    """
    
    basic_card: Optional[GoogleCloudDialogflowV2IntentMessageBasicCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicCard') }})
    browse_carousel_card: Optional[GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browseCarouselCard') }})
    card: Optional[GoogleCloudDialogflowV2IntentMessageCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    carousel_select: Optional[GoogleCloudDialogflowV2IntentMessageCarouselSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carouselSelect') }})
    image: Optional[GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    link_out_suggestion: Optional[GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkOutSuggestion') }})
    list_select: Optional[GoogleCloudDialogflowV2IntentMessageListSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listSelect') }})
    media_content: Optional[GoogleCloudDialogflowV2IntentMessageMediaContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaContent') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    platform: Optional[GoogleCloudDialogflowV2IntentMessagePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    quick_replies: Optional[GoogleCloudDialogflowV2IntentMessageQuickReplies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quickReplies') }})
    simple_responses: Optional[GoogleCloudDialogflowV2IntentMessageSimpleResponses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleResponses') }})
    suggestions: Optional[GoogleCloudDialogflowV2IntentMessageSuggestions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    table_card: Optional[GoogleCloudDialogflowV2IntentMessageTableCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCard') }})
    text: Optional[GoogleCloudDialogflowV2IntentMessageText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

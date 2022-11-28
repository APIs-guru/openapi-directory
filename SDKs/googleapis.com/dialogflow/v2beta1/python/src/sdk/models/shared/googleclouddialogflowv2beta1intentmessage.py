from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    FACEBOOK = "FACEBOOK"
    SLACK = "SLACK"
    TELEGRAM = "TELEGRAM"
    KIK = "KIK"
    SKYPE = "SKYPE"
    LINE = "LINE"
    VIBER = "VIBER"
    ACTIONS_ON_GOOGLE = "ACTIONS_ON_GOOGLE"
    TELEPHONY = "TELEPHONY"
    GOOGLE_HANGOUTS = "GOOGLE_HANGOUTS"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessage:
    r"""GoogleCloudDialogflowV2beta1IntentMessage
    Corresponds to the `Response` field in the Dialogflow console.
    """
    
    basic_card: Optional[GoogleCloudDialogflowV2beta1IntentMessageBasicCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicCard') }})
    browse_carousel_card: Optional[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browseCarouselCard') }})
    card: Optional[GoogleCloudDialogflowV2beta1IntentMessageCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    carousel_select: Optional[GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carouselSelect') }})
    image: Optional[GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    link_out_suggestion: Optional[GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkOutSuggestion') }})
    list_select: Optional[GoogleCloudDialogflowV2beta1IntentMessageListSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listSelect') }})
    media_content: Optional[GoogleCloudDialogflowV2beta1IntentMessageMediaContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaContent') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    platform: Optional[GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    quick_replies: Optional[GoogleCloudDialogflowV2beta1IntentMessageQuickReplies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quickReplies') }})
    rbm_carousel_rich_card: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rbmCarouselRichCard') }})
    rbm_standalone_rich_card: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rbmStandaloneRichCard') }})
    rbm_text: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rbmText') }})
    simple_responses: Optional[GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleResponses') }})
    suggestions: Optional[GoogleCloudDialogflowV2beta1IntentMessageSuggestions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    table_card: Optional[GoogleCloudDialogflowV2beta1IntentMessageTableCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCard') }})
    telephony_play_audio: Optional[GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyPlayAudio') }})
    telephony_synthesize_speech: Optional[GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonySynthesizeSpeech') }})
    telephony_transfer_call: Optional[GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyTransferCall') }})
    text: Optional[GoogleCloudDialogflowV2beta1IntentMessageText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

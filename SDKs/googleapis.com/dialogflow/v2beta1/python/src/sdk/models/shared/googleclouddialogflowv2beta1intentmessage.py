from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagebasiccard
from . import googleclouddialogflowv2beta1intentmessagebrowsecarouselcard
from . import googleclouddialogflowv2beta1intentmessagecard
from . import googleclouddialogflowv2beta1intentmessagecarouselselect
from . import googleclouddialogflowv2beta1intentmessageimage
from . import googleclouddialogflowv2beta1intentmessagelinkoutsuggestion
from . import googleclouddialogflowv2beta1intentmessagelistselect
from . import googleclouddialogflowv2beta1intentmessagemediacontent
from . import googleclouddialogflowv2beta1intentmessagequickreplies
from . import googleclouddialogflowv2beta1intentmessagerbmcarouselcard
from . import googleclouddialogflowv2beta1intentmessagerbmstandalonecard
from . import googleclouddialogflowv2beta1intentmessagerbmtext
from . import googleclouddialogflowv2beta1intentmessagesimpleresponses
from . import googleclouddialogflowv2beta1intentmessagesuggestions
from . import googleclouddialogflowv2beta1intentmessagetablecard
from . import googleclouddialogflowv2beta1intentmessagetelephonyplayaudio
from . import googleclouddialogflowv2beta1intentmessagetelephonysynthesizespeech
from . import googleclouddialogflowv2beta1intentmessagetelephonytransfercall
from . import googleclouddialogflowv2beta1intentmessagetext

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
    basic_card: Optional[googleclouddialogflowv2beta1intentmessagebasiccard.GoogleCloudDialogflowV2beta1IntentMessageBasicCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicCard' }})
    browse_carousel_card: Optional[googleclouddialogflowv2beta1intentmessagebrowsecarouselcard.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browseCarouselCard' }})
    card: Optional[googleclouddialogflowv2beta1intentmessagecard.GoogleCloudDialogflowV2beta1IntentMessageCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    carousel_select: Optional[googleclouddialogflowv2beta1intentmessagecarouselselect.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carouselSelect' }})
    image: Optional[googleclouddialogflowv2beta1intentmessageimage.GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    link_out_suggestion: Optional[googleclouddialogflowv2beta1intentmessagelinkoutsuggestion.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkOutSuggestion' }})
    list_select: Optional[googleclouddialogflowv2beta1intentmessagelistselect.GoogleCloudDialogflowV2beta1IntentMessageListSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listSelect' }})
    media_content: Optional[googleclouddialogflowv2beta1intentmessagemediacontent.GoogleCloudDialogflowV2beta1IntentMessageMediaContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaContent' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    platform: Optional[GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    quick_replies: Optional[googleclouddialogflowv2beta1intentmessagequickreplies.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quickReplies' }})
    rbm_carousel_rich_card: Optional[googleclouddialogflowv2beta1intentmessagerbmcarouselcard.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rbmCarouselRichCard' }})
    rbm_standalone_rich_card: Optional[googleclouddialogflowv2beta1intentmessagerbmstandalonecard.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rbmStandaloneRichCard' }})
    rbm_text: Optional[googleclouddialogflowv2beta1intentmessagerbmtext.GoogleCloudDialogflowV2beta1IntentMessageRbmText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rbmText' }})
    simple_responses: Optional[googleclouddialogflowv2beta1intentmessagesimpleresponses.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleResponses' }})
    suggestions: Optional[googleclouddialogflowv2beta1intentmessagesuggestions.GoogleCloudDialogflowV2beta1IntentMessageSuggestions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    table_card: Optional[googleclouddialogflowv2beta1intentmessagetablecard.GoogleCloudDialogflowV2beta1IntentMessageTableCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCard' }})
    telephony_play_audio: Optional[googleclouddialogflowv2beta1intentmessagetelephonyplayaudio.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonyPlayAudio' }})
    telephony_synthesize_speech: Optional[googleclouddialogflowv2beta1intentmessagetelephonysynthesizespeech.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonySynthesizeSpeech' }})
    telephony_transfer_call: Optional[googleclouddialogflowv2beta1intentmessagetelephonytransfercall.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonyTransferCall' }})
    text: Optional[googleclouddialogflowv2beta1intentmessagetext.GoogleCloudDialogflowV2beta1IntentMessageText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

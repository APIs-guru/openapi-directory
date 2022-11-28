import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCard } from "./googleclouddialogflowv2beta1intentmessagebasiccard";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcard";
import { GoogleCloudDialogflowV2beta1IntentMessageCard } from "./googleclouddialogflowv2beta1intentmessagecard";
import { GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect } from "./googleclouddialogflowv2beta1intentmessagecarouselselect";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion } from "./googleclouddialogflowv2beta1intentmessagelinkoutsuggestion";
import { GoogleCloudDialogflowV2beta1IntentMessageListSelect } from "./googleclouddialogflowv2beta1intentmessagelistselect";
import { GoogleCloudDialogflowV2beta1IntentMessageMediaContent } from "./googleclouddialogflowv2beta1intentmessagemediacontent";
import { GoogleCloudDialogflowV2beta1IntentMessageQuickReplies } from "./googleclouddialogflowv2beta1intentmessagequickreplies";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard } from "./googleclouddialogflowv2beta1intentmessagerbmcarouselcard";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard } from "./googleclouddialogflowv2beta1intentmessagerbmstandalonecard";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmText } from "./googleclouddialogflowv2beta1intentmessagerbmtext";
import { GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses } from "./googleclouddialogflowv2beta1intentmessagesimpleresponses";
import { GoogleCloudDialogflowV2beta1IntentMessageSuggestions } from "./googleclouddialogflowv2beta1intentmessagesuggestions";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCard } from "./googleclouddialogflowv2beta1intentmessagetablecard";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio } from "./googleclouddialogflowv2beta1intentmessagetelephonyplayaudio";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech } from "./googleclouddialogflowv2beta1intentmessagetelephonysynthesizespeech";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1intentmessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1IntentMessageText } from "./googleclouddialogflowv2beta1intentmessagetext";
export declare enum GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Facebook = "FACEBOOK",
    Slack = "SLACK",
    Telegram = "TELEGRAM",
    Kik = "KIK",
    Skype = "SKYPE",
    Line = "LINE",
    Viber = "VIBER",
    ActionsOnGoogle = "ACTIONS_ON_GOOGLE",
    Telephony = "TELEPHONY",
    GoogleHangouts = "GOOGLE_HANGOUTS"
}
/**
 * Corresponds to the `Response` field in the Dialogflow console.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessage extends SpeakeasyBase {
    basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
    browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
    card?: GoogleCloudDialogflowV2beta1IntentMessageCard;
    carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
    listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;
    mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
    payload?: Map<string, any>;
    platform?: GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;
    quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
    rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
    rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
    rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;
    simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
    suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
    tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;
    telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
    telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
    telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
    text?: GoogleCloudDialogflowV2beta1IntentMessageText;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCard } from "./googleclouddialogflowv2intentmessagebasiccard";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard } from "./googleclouddialogflowv2intentmessagebrowsecarouselcard";
import { GoogleCloudDialogflowV2IntentMessageCard } from "./googleclouddialogflowv2intentmessagecard";
import { GoogleCloudDialogflowV2IntentMessageCarouselSelect } from "./googleclouddialogflowv2intentmessagecarouselselect";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion } from "./googleclouddialogflowv2intentmessagelinkoutsuggestion";
import { GoogleCloudDialogflowV2IntentMessageListSelect } from "./googleclouddialogflowv2intentmessagelistselect";
import { GoogleCloudDialogflowV2IntentMessageMediaContent } from "./googleclouddialogflowv2intentmessagemediacontent";
import { GoogleCloudDialogflowV2IntentMessageQuickReplies } from "./googleclouddialogflowv2intentmessagequickreplies";
import { GoogleCloudDialogflowV2IntentMessageSimpleResponses } from "./googleclouddialogflowv2intentmessagesimpleresponses";
import { GoogleCloudDialogflowV2IntentMessageSuggestions } from "./googleclouddialogflowv2intentmessagesuggestions";
import { GoogleCloudDialogflowV2IntentMessageTableCard } from "./googleclouddialogflowv2intentmessagetablecard";
import { GoogleCloudDialogflowV2IntentMessageText } from "./googleclouddialogflowv2intentmessagetext";
export declare enum GoogleCloudDialogflowV2IntentMessagePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Facebook = "FACEBOOK",
    Slack = "SLACK",
    Telegram = "TELEGRAM",
    Kik = "KIK",
    Skype = "SKYPE",
    Line = "LINE",
    Viber = "VIBER",
    ActionsOnGoogle = "ACTIONS_ON_GOOGLE",
    GoogleHangouts = "GOOGLE_HANGOUTS"
}
/**
 * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
**/
export declare class GoogleCloudDialogflowV2IntentMessage extends SpeakeasyBase {
    basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;
    browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
    card?: GoogleCloudDialogflowV2IntentMessageCard;
    carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
    listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;
    mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;
    payload?: Map<string, any>;
    platform?: GoogleCloudDialogflowV2IntentMessagePlatformEnum;
    quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;
    simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;
    suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;
    tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;
    text?: GoogleCloudDialogflowV2IntentMessageText;
}

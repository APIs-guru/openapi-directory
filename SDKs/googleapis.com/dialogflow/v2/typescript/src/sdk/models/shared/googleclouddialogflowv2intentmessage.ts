import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum GoogleCloudDialogflowV2IntentMessagePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Facebook = "FACEBOOK"
,    Slack = "SLACK"
,    Telegram = "TELEGRAM"
,    Kik = "KIK"
,    Skype = "SKYPE"
,    Line = "LINE"
,    Viber = "VIBER"
,    ActionsOnGoogle = "ACTIONS_ON_GOOGLE"
,    GoogleHangouts = "GOOGLE_HANGOUTS"
}


// GoogleCloudDialogflowV2IntentMessage
/** 
 * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
**/
export class GoogleCloudDialogflowV2IntentMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicCard" })
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;

  @Metadata({ data: "json, name=browseCarouselCard" })
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;

  @Metadata({ data: "json, name=card" })
  card?: GoogleCloudDialogflowV2IntentMessageCard;

  @Metadata({ data: "json, name=carouselSelect" })
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=linkOutSuggestion" })
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;

  @Metadata({ data: "json, name=listSelect" })
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;

  @Metadata({ data: "json, name=mediaContent" })
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=platform" })
  platform?: GoogleCloudDialogflowV2IntentMessagePlatformEnum;

  @Metadata({ data: "json, name=quickReplies" })
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;

  @Metadata({ data: "json, name=simpleResponses" })
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;

  @Metadata({ data: "json, name=suggestions" })
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;

  @Metadata({ data: "json, name=tableCard" })
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;

  @Metadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowV2IntentMessageText;
}

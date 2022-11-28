import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


// GoogleCloudDialogflowV2IntentMessage
/** 
 * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
**/
export class GoogleCloudDialogflowV2IntentMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicCard" })
  basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;

  @SpeakeasyMetadata({ data: "json, name=browseCarouselCard" })
  browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: GoogleCloudDialogflowV2IntentMessageCard;

  @SpeakeasyMetadata({ data: "json, name=carouselSelect" })
  carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=linkOutSuggestion" })
  linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;

  @SpeakeasyMetadata({ data: "json, name=listSelect" })
  listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;

  @SpeakeasyMetadata({ data: "json, name=mediaContent" })
  mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: GoogleCloudDialogflowV2IntentMessagePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=quickReplies" })
  quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;

  @SpeakeasyMetadata({ data: "json, name=simpleResponses" })
  simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;

  @SpeakeasyMetadata({ data: "json, name=suggestions" })
  suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;

  @SpeakeasyMetadata({ data: "json, name=tableCard" })
  tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowV2IntentMessageText;
}

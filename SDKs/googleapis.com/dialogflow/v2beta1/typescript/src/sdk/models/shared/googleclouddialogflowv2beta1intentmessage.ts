import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Facebook = "FACEBOOK"
,    Slack = "SLACK"
,    Telegram = "TELEGRAM"
,    Kik = "KIK"
,    Skype = "SKYPE"
,    Line = "LINE"
,    Viber = "VIBER"
,    ActionsOnGoogle = "ACTIONS_ON_GOOGLE"
,    Telephony = "TELEPHONY"
,    GoogleHangouts = "GOOGLE_HANGOUTS"
}


// GoogleCloudDialogflowV2beta1IntentMessage
/** 
 * Corresponds to the `Response` field in the Dialogflow console.
**/
export class GoogleCloudDialogflowV2beta1IntentMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicCard" })
  basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;

  @Metadata({ data: "json, name=browseCarouselCard" })
  browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;

  @Metadata({ data: "json, name=card" })
  card?: GoogleCloudDialogflowV2beta1IntentMessageCard;

  @Metadata({ data: "json, name=carouselSelect" })
  carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=linkOutSuggestion" })
  linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;

  @Metadata({ data: "json, name=listSelect" })
  listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;

  @Metadata({ data: "json, name=mediaContent" })
  mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=platform" })
  platform?: GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;

  @Metadata({ data: "json, name=quickReplies" })
  quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;

  @Metadata({ data: "json, name=rbmCarouselRichCard" })
  rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;

  @Metadata({ data: "json, name=rbmStandaloneRichCard" })
  rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;

  @Metadata({ data: "json, name=rbmText" })
  rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;

  @Metadata({ data: "json, name=simpleResponses" })
  simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;

  @Metadata({ data: "json, name=suggestions" })
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;

  @Metadata({ data: "json, name=tableCard" })
  tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;

  @Metadata({ data: "json, name=telephonyPlayAudio" })
  telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;

  @Metadata({ data: "json, name=telephonySynthesizeSpeech" })
  telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;

  @Metadata({ data: "json, name=telephonyTransferCall" })
  telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;

  @Metadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowV2beta1IntentMessageText;
}

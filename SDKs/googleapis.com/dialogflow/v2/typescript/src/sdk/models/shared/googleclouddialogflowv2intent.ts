import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentFollowupIntentInfo } from "./googleclouddialogflowv2intentfollowupintentinfo";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2IntentParameter } from "./googleclouddialogflowv2intentparameter";
import { GoogleCloudDialogflowV2IntentTrainingPhrase } from "./googleclouddialogflowv2intenttrainingphrase";

export enum GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum {
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

export enum GoogleCloudDialogflowV2IntentWebhookStateEnum {
    WebhookStateUnspecified = "WEBHOOK_STATE_UNSPECIFIED"
,    WebhookStateEnabled = "WEBHOOK_STATE_ENABLED"
,    WebhookStateEnabledForSlotFilling = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
}


// GoogleCloudDialogflowV2Intent
/** 
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export class GoogleCloudDialogflowV2Intent extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=defaultResponsePlatforms" })
  defaultResponsePlatforms?: GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endInteraction" })
  endInteraction?: boolean;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=followupIntentInfo", elemType: shared.GoogleCloudDialogflowV2IntentFollowupIntentInfo })
  followupIntentInfo?: GoogleCloudDialogflowV2IntentFollowupIntentInfo[];

  @Metadata({ data: "json, name=inputContextNames" })
  inputContextNames?: string[];

  @Metadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @Metadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: boolean;

  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowV2IntentMessage })
  messages?: GoogleCloudDialogflowV2IntentMessage[];

  @Metadata({ data: "json, name=mlDisabled" })
  mlDisabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.GoogleCloudDialogflowV2Context })
  outputContexts?: GoogleCloudDialogflowV2Context[];

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudDialogflowV2IntentParameter })
  parameters?: GoogleCloudDialogflowV2IntentParameter[];

  @Metadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @Metadata({ data: "json, name=rootFollowupIntentName" })
  rootFollowupIntentName?: string;

  @Metadata({ data: "json, name=trainingPhrases", elemType: shared.GoogleCloudDialogflowV2IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowV2IntentTrainingPhrase[];

  @Metadata({ data: "json, name=webhookState" })
  webhookState?: GoogleCloudDialogflowV2IntentWebhookStateEnum;
}

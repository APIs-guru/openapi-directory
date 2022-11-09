import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo } from "./googleclouddialogflowv2beta1intentfollowupintentinfo";
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1IntentParameter } from "./googleclouddialogflowv2beta1intentparameter";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrase } from "./googleclouddialogflowv2beta1intenttrainingphrase";

export enum GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum {
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

export enum GoogleCloudDialogflowV2beta1IntentWebhookStateEnum {
    WebhookStateUnspecified = "WEBHOOK_STATE_UNSPECIFIED"
,    WebhookStateEnabled = "WEBHOOK_STATE_ENABLED"
,    WebhookStateEnabledForSlotFilling = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
}


// GoogleCloudDialogflowV2beta1Intent
/** 
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export class GoogleCloudDialogflowV2beta1Intent extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=defaultResponsePlatforms" })
  defaultResponsePlatforms?: GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endInteraction" })
  endInteraction?: boolean;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=followupIntentInfo", elemType: shared.GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo })
  followupIntentInfo?: GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];

  @Metadata({ data: "json, name=inputContextNames" })
  inputContextNames?: string[];

  @Metadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @Metadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: boolean;

  @Metadata({ data: "json, name=messages", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessage })
  messages?: GoogleCloudDialogflowV2beta1IntentMessage[];

  @Metadata({ data: "json, name=mlDisabled" })
  mlDisabled?: boolean;

  @Metadata({ data: "json, name=mlEnabled" })
  mlEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.GoogleCloudDialogflowV2beta1Context })
  outputContexts?: GoogleCloudDialogflowV2beta1Context[];

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudDialogflowV2beta1IntentParameter })
  parameters?: GoogleCloudDialogflowV2beta1IntentParameter[];

  @Metadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @Metadata({ data: "json, name=rootFollowupIntentName" })
  rootFollowupIntentName?: string;

  @Metadata({ data: "json, name=trainingPhrases", elemType: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];

  @Metadata({ data: "json, name=webhookState" })
  webhookState?: GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1IntentParameter } from "./googleclouddialogflowv2beta1intentparameter";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrase } from "./googleclouddialogflowv2beta1intenttrainingphrase";
import { GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo } from "./googleclouddialogflowv2beta1intentfollowupintentinfo";


export enum GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum {
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

export enum GoogleCloudDialogflowV2beta1IntentWebhookStateEnum {
    WebhookStateUnspecified = "WEBHOOK_STATE_UNSPECIFIED",
    WebhookStateEnabled = "WEBHOOK_STATE_ENABLED",
    WebhookStateEnabledForSlotFilling = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
}


// GoogleCloudDialogflowV2beta1IntentInput
/** 
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export class GoogleCloudDialogflowV2beta1IntentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" })
  defaultResponsePlatforms?: GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endInteraction" })
  endInteraction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=inputContextNames" })
  inputContextNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2beta1IntentMessage })
  messages?: GoogleCloudDialogflowV2beta1IntentMessage[];

  @SpeakeasyMetadata({ data: "json, name=mlDisabled" })
  mlDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mlEnabled" })
  mlEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2beta1Context })
  outputContexts?: GoogleCloudDialogflowV2beta1Context[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2beta1IntentParameter })
  parameters?: GoogleCloudDialogflowV2beta1IntentParameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2beta1IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];

  @SpeakeasyMetadata({ data: "json, name=webhookState" })
  webhookState?: GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
}


// GoogleCloudDialogflowV2beta1Intent
/** 
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export class GoogleCloudDialogflowV2beta1Intent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" })
  defaultResponsePlatforms?: GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endInteraction" })
  endInteraction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=followupIntentInfo", elemType: GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo })
  followupIntentInfo?: GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];

  @SpeakeasyMetadata({ data: "json, name=inputContextNames" })
  inputContextNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2beta1IntentMessage })
  messages?: GoogleCloudDialogflowV2beta1IntentMessage[];

  @SpeakeasyMetadata({ data: "json, name=mlDisabled" })
  mlDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mlEnabled" })
  mlEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2beta1Context })
  outputContexts?: GoogleCloudDialogflowV2beta1Context[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2beta1IntentParameter })
  parameters?: GoogleCloudDialogflowV2beta1IntentParameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rootFollowupIntentName" })
  rootFollowupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2beta1IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];

  @SpeakeasyMetadata({ data: "json, name=webhookState" })
  webhookState?: GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
}

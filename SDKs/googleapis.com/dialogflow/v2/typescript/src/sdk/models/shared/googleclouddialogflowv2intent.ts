import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentFollowupIntentInfo } from "./googleclouddialogflowv2intentfollowupintentinfo";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2IntentParameter } from "./googleclouddialogflowv2intentparameter";
import { GoogleCloudDialogflowV2IntentTrainingPhrase } from "./googleclouddialogflowv2intenttrainingphrase";


export enum GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum {
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

export enum GoogleCloudDialogflowV2IntentWebhookStateEnum {
    WebhookStateUnspecified = "WEBHOOK_STATE_UNSPECIFIED",
    WebhookStateEnabled = "WEBHOOK_STATE_ENABLED",
    WebhookStateEnabledForSlotFilling = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
}


// GoogleCloudDialogflowV2Intent
/** 
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export class GoogleCloudDialogflowV2Intent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" })
  defaultResponsePlatforms?: GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endInteraction" })
  endInteraction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=followupIntentInfo", elemType: GoogleCloudDialogflowV2IntentFollowupIntentInfo })
  followupIntentInfo?: GoogleCloudDialogflowV2IntentFollowupIntentInfo[];

  @SpeakeasyMetadata({ data: "json, name=inputContextNames" })
  inputContextNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=isFallback" })
  isFallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" })
  liveAgentHandoff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2IntentMessage })
  messages?: GoogleCloudDialogflowV2IntentMessage[];

  @SpeakeasyMetadata({ data: "json, name=mlDisabled" })
  mlDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2Context })
  outputContexts?: GoogleCloudDialogflowV2Context[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2IntentParameter })
  parameters?: GoogleCloudDialogflowV2IntentParameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rootFollowupIntentName" })
  rootFollowupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowV2IntentTrainingPhrase[];

  @SpeakeasyMetadata({ data: "json, name=webhookState" })
  webhookState?: GoogleCloudDialogflowV2IntentWebhookStateEnum;
}


// GoogleCloudDialogflowV2IntentInput
/** 
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export class GoogleCloudDialogflowV2IntentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" })
  defaultResponsePlatforms?: GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[];

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

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2IntentMessage })
  messages?: GoogleCloudDialogflowV2IntentMessage[];

  @SpeakeasyMetadata({ data: "json, name=mlDisabled" })
  mlDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2Context })
  outputContexts?: GoogleCloudDialogflowV2Context[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2IntentParameter })
  parameters?: GoogleCloudDialogflowV2IntentParameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" })
  parentFollowupIntentName?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2IntentTrainingPhrase })
  trainingPhrases?: GoogleCloudDialogflowV2IntentTrainingPhrase[];

  @SpeakeasyMetadata({ data: "json, name=webhookState" })
  webhookState?: GoogleCloudDialogflowV2IntentWebhookStateEnum;
}

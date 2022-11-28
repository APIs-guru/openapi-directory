import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1IntentParameter } from "./googleclouddialogflowv2beta1intentparameter";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrase } from "./googleclouddialogflowv2beta1intenttrainingphrase";
import { GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo } from "./googleclouddialogflowv2beta1intentfollowupintentinfo";
export declare enum GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum {
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
export declare enum GoogleCloudDialogflowV2beta1IntentWebhookStateEnum {
    WebhookStateUnspecified = "WEBHOOK_STATE_UNSPECIFIED",
    WebhookStateEnabled = "WEBHOOK_STATE_ENABLED",
    WebhookStateEnabledForSlotFilling = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
}
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export declare class GoogleCloudDialogflowV2beta1IntentInput extends SpeakeasyBase {
    action?: string;
    defaultResponsePlatforms?: GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum[];
    displayName?: string;
    endInteraction?: boolean;
    events?: string[];
    inputContextNames?: string[];
    isFallback?: boolean;
    liveAgentHandoff?: boolean;
    messages?: GoogleCloudDialogflowV2beta1IntentMessage[];
    mlDisabled?: boolean;
    mlEnabled?: boolean;
    name?: string;
    outputContexts?: GoogleCloudDialogflowV2beta1Context[];
    parameters?: GoogleCloudDialogflowV2beta1IntentParameter[];
    parentFollowupIntentName?: string;
    priority?: number;
    resetContexts?: boolean;
    trainingPhrases?: GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
    webhookState?: GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
}
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export declare class GoogleCloudDialogflowV2beta1Intent extends SpeakeasyBase {
    action?: string;
    defaultResponsePlatforms?: GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum[];
    displayName?: string;
    endInteraction?: boolean;
    events?: string[];
    followupIntentInfo?: GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
    inputContextNames?: string[];
    isFallback?: boolean;
    liveAgentHandoff?: boolean;
    messages?: GoogleCloudDialogflowV2beta1IntentMessage[];
    mlDisabled?: boolean;
    mlEnabled?: boolean;
    name?: string;
    outputContexts?: GoogleCloudDialogflowV2beta1Context[];
    parameters?: GoogleCloudDialogflowV2beta1IntentParameter[];
    parentFollowupIntentName?: string;
    priority?: number;
    resetContexts?: boolean;
    rootFollowupIntentName?: string;
    trainingPhrases?: GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
    webhookState?: GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
}

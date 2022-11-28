import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentFollowupIntentInfo } from "./googleclouddialogflowv2intentfollowupintentinfo";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2IntentParameter } from "./googleclouddialogflowv2intentparameter";
import { GoogleCloudDialogflowV2IntentTrainingPhrase } from "./googleclouddialogflowv2intenttrainingphrase";
export declare enum GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum {
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
export declare enum GoogleCloudDialogflowV2IntentWebhookStateEnum {
    WebhookStateUnspecified = "WEBHOOK_STATE_UNSPECIFIED",
    WebhookStateEnabled = "WEBHOOK_STATE_ENABLED",
    WebhookStateEnabledForSlotFilling = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"
}
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export declare class GoogleCloudDialogflowV2Intent extends SpeakeasyBase {
    action?: string;
    defaultResponsePlatforms?: GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[];
    displayName?: string;
    endInteraction?: boolean;
    events?: string[];
    followupIntentInfo?: GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
    inputContextNames?: string[];
    isFallback?: boolean;
    liveAgentHandoff?: boolean;
    messages?: GoogleCloudDialogflowV2IntentMessage[];
    mlDisabled?: boolean;
    name?: string;
    outputContexts?: GoogleCloudDialogflowV2Context[];
    parameters?: GoogleCloudDialogflowV2IntentParameter[];
    parentFollowupIntentName?: string;
    priority?: number;
    resetContexts?: boolean;
    rootFollowupIntentName?: string;
    trainingPhrases?: GoogleCloudDialogflowV2IntentTrainingPhrase[];
    webhookState?: GoogleCloudDialogflowV2IntentWebhookStateEnum;
}
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
export declare class GoogleCloudDialogflowV2IntentInput extends SpeakeasyBase {
    action?: string;
    defaultResponsePlatforms?: GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[];
    displayName?: string;
    endInteraction?: boolean;
    events?: string[];
    inputContextNames?: string[];
    isFallback?: boolean;
    liveAgentHandoff?: boolean;
    messages?: GoogleCloudDialogflowV2IntentMessage[];
    mlDisabled?: boolean;
    name?: string;
    outputContexts?: GoogleCloudDialogflowV2Context[];
    parameters?: GoogleCloudDialogflowV2IntentParameter[];
    parentFollowupIntentName?: string;
    priority?: number;
    resetContexts?: boolean;
    trainingPhrases?: GoogleCloudDialogflowV2IntentTrainingPhrase[];
    webhookState?: GoogleCloudDialogflowV2IntentWebhookStateEnum;
}

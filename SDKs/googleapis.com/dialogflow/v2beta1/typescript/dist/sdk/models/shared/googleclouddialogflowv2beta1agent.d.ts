import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1AgentApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    ApiVersionV1 = "API_VERSION_V1",
    ApiVersionV2 = "API_VERSION_V2",
    ApiVersionV2Beta1 = "API_VERSION_V2_BETA_1"
}
export declare enum GoogleCloudDialogflowV2beta1AgentMatchModeEnum {
    MatchModeUnspecified = "MATCH_MODE_UNSPECIFIED",
    MatchModeHybrid = "MATCH_MODE_HYBRID",
    MatchModeMlOnly = "MATCH_MODE_ML_ONLY"
}
export declare enum GoogleCloudDialogflowV2beta1AgentTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    TierStandard = "TIER_STANDARD",
    TierEnterprise = "TIER_ENTERPRISE",
    TierEnterprisePlus = "TIER_ENTERPRISE_PLUS"
}
/**
 * A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview).
**/
export declare class GoogleCloudDialogflowV2beta1Agent extends SpeakeasyBase {
    apiVersion?: GoogleCloudDialogflowV2beta1AgentApiVersionEnum;
    avatarUri?: string;
    classificationThreshold?: number;
    defaultLanguageCode?: string;
    description?: string;
    displayName?: string;
    enableLogging?: boolean;
    matchMode?: GoogleCloudDialogflowV2beta1AgentMatchModeEnum;
    parent?: string;
    supportedLanguageCodes?: string[];
    tier?: GoogleCloudDialogflowV2beta1AgentTierEnum;
    timeZone?: string;
}

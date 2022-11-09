import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1AgentApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED"
,    ApiVersionV1 = "API_VERSION_V1"
,    ApiVersionV2 = "API_VERSION_V2"
,    ApiVersionV2Beta1 = "API_VERSION_V2_BETA_1"
}

export enum GoogleCloudDialogflowV2beta1AgentMatchModeEnum {
    MatchModeUnspecified = "MATCH_MODE_UNSPECIFIED"
,    MatchModeHybrid = "MATCH_MODE_HYBRID"
,    MatchModeMlOnly = "MATCH_MODE_ML_ONLY"
}

export enum GoogleCloudDialogflowV2beta1AgentTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    TierStandard = "TIER_STANDARD"
,    TierEnterprise = "TIER_ENTERPRISE"
,    TierEnterprisePlus = "TIER_ENTERPRISE_PLUS"
}


// GoogleCloudDialogflowV2beta1Agent
/** 
 * A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview). 
**/
export class GoogleCloudDialogflowV2beta1Agent extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: GoogleCloudDialogflowV2beta1AgentApiVersionEnum;

  @Metadata({ data: "json, name=avatarUri" })
  avatarUri?: string;

  @Metadata({ data: "json, name=classificationThreshold" })
  classificationThreshold?: number;

  @Metadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableLogging" })
  enableLogging?: boolean;

  @Metadata({ data: "json, name=matchMode" })
  matchMode?: GoogleCloudDialogflowV2beta1AgentMatchModeEnum;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=supportedLanguageCodes" })
  supportedLanguageCodes?: string[];

  @Metadata({ data: "json, name=tier" })
  tier?: GoogleCloudDialogflowV2beta1AgentTierEnum;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}

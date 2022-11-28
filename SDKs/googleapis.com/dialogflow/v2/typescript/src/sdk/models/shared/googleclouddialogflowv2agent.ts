import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2AgentApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    ApiVersionV1 = "API_VERSION_V1",
    ApiVersionV2 = "API_VERSION_V2",
    ApiVersionV2Beta1 = "API_VERSION_V2_BETA_1"
}

export enum GoogleCloudDialogflowV2AgentMatchModeEnum {
    MatchModeUnspecified = "MATCH_MODE_UNSPECIFIED",
    MatchModeHybrid = "MATCH_MODE_HYBRID",
    MatchModeMlOnly = "MATCH_MODE_ML_ONLY"
}

export enum GoogleCloudDialogflowV2AgentTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    TierStandard = "TIER_STANDARD",
    TierEnterprise = "TIER_ENTERPRISE",
    TierEnterprisePlus = "TIER_ENTERPRISE_PLUS"
}


// GoogleCloudDialogflowV2Agent
/** 
 * A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview). 
**/
export class GoogleCloudDialogflowV2Agent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: GoogleCloudDialogflowV2AgentApiVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=avatarUri" })
  avatarUri?: string;

  @SpeakeasyMetadata({ data: "json, name=classificationThreshold" })
  classificationThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableLogging" })
  enableLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchMode" })
  matchMode?: GoogleCloudDialogflowV2AgentMatchModeEnum;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedLanguageCodes" })
  supportedLanguageCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: GoogleCloudDialogflowV2AgentTierEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}

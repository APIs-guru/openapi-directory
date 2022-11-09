import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED"
,    PhoneCall = "PHONE_CALL"
,    Chat = "CHAT"
}


// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig
/** 
 * Configs for the input data used to create the issue model.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;

  @Metadata({ data: "json, name=trainingConversationsCount" })
  trainingConversationsCount?: string;
}

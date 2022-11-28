import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}


// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig
/** 
 * Configs for the input data used to create the issue model.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingConversationsCount" })
  trainingConversationsCount?: string;
}


// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput
/** 
 * Configs for the input data used to create the issue model.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
}

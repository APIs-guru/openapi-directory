import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstats";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";


export enum GoogleCloudContactcenterinsightsV1IssueModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Undeployed = "UNDEPLOYED",
    Deploying = "DEPLOYING",
    Deployed = "DEPLOYED",
    Undeploying = "UNDEPLOYING",
    Deleting = "DELETING"
}


// GoogleCloudContactcenterinsightsV1IssueModelInput
/** 
 * The issue model resource.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDataConfig" })
  inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingStats" })
  trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
}


// GoogleCloudContactcenterinsightsV1IssueModel
/** 
 * The issue model resource.
**/
export class GoogleCloudContactcenterinsightsV1IssueModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDataConfig" })
  inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudContactcenterinsightsV1IssueModelStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingStats" })
  trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

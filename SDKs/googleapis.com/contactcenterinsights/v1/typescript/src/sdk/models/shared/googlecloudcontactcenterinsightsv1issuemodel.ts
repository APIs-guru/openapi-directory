import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstats";

export enum GoogleCloudContactcenterinsightsV1IssueModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Undeployed = "UNDEPLOYED"
,    Deploying = "DEPLOYING"
,    Deployed = "DEPLOYED"
,    Undeploying = "UNDEPLOYING"
,    Deleting = "DELETING"
}


// GoogleCloudContactcenterinsightsV1IssueModel
/** 
 * The issue model resource.
**/
export class GoogleCloudContactcenterinsightsV1IssueModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=inputDataConfig" })
  inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudContactcenterinsightsV1IssueModelStateEnum;

  @Metadata({ data: "json, name=trainingStats" })
  trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

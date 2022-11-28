import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstats";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
export declare enum GoogleCloudContactcenterinsightsV1IssueModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Undeployed = "UNDEPLOYED",
    Deploying = "DEPLOYING",
    Deployed = "DEPLOYED",
    Undeploying = "UNDEPLOYING",
    Deleting = "DELETING"
}
/**
 * The issue model resource.
**/
export declare class GoogleCloudContactcenterinsightsV1IssueModelInput extends SpeakeasyBase {
    displayName?: string;
    inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput;
    name?: string;
    trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
}
/**
 * The issue model resource.
**/
export declare class GoogleCloudContactcenterinsightsV1IssueModel extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;
    name?: string;
    state?: GoogleCloudContactcenterinsightsV1IssueModelStateEnum;
    trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
    updateTime?: string;
}

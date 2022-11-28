import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}
/**
 * Configs for the input data used to create the issue model.
**/
export declare class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig extends SpeakeasyBase {
    filter?: string;
    medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
    trainingConversationsCount?: string;
}
/**
 * Configs for the input data used to create the issue model.
**/
export declare class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput extends SpeakeasyBase {
    filter?: string;
    medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
}

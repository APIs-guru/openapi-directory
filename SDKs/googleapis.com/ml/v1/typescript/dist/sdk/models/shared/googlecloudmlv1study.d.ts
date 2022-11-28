import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1StudyConfig } from "./googlecloudmlv1studyconfig";
export declare enum GoogleCloudMlV1StudyStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Completed = "COMPLETED"
}
/**
 * A message representing a Study.
**/
export declare class GoogleCloudMlV1StudyInput extends SpeakeasyBase {
    studyConfig?: GoogleCloudMlV1StudyConfig;
}
/**
 * A message representing a Study.
**/
export declare class GoogleCloudMlV1Study extends SpeakeasyBase {
    createTime?: string;
    inactiveReason?: string;
    name?: string;
    state?: GoogleCloudMlV1StudyStateEnum;
    studyConfig?: GoogleCloudMlV1StudyConfig;
}

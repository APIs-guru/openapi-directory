import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2Trigger } from "./googleprivacydlpv2trigger";
export declare enum GooglePrivacyDlpV2JobTriggerStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Paused = "PAUSED",
    Cancelled = "CANCELLED"
}
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
export declare class GooglePrivacyDlpV2JobTrigger extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    errors?: GooglePrivacyDlpV2Error[];
    inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
    lastRunTime?: string;
    name?: string;
    status?: GooglePrivacyDlpV2JobTriggerStatusEnum;
    triggers?: GooglePrivacyDlpV2Trigger[];
    updateTime?: string;
}
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
export declare class GooglePrivacyDlpV2JobTriggerInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
    name?: string;
    status?: GooglePrivacyDlpV2JobTriggerStatusEnum;
    triggers?: GooglePrivacyDlpV2Trigger[];
}

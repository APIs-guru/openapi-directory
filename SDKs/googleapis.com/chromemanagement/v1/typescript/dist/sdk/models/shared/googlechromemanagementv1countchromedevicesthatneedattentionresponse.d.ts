import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response containing counts for devices that need attention.
**/
export declare class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse extends SpeakeasyBase {
    noRecentPolicySyncCount?: string;
    noRecentUserActivityCount?: string;
    osVersionNotCompliantCount?: string;
    pendingUpdate?: string;
    unsupportedPolicyCount?: string;
}

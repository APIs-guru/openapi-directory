import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum {
    UpdateStateUnspecified = "UPDATE_STATE_UNSPECIFIED",
    OsImageDownloadNotStarted = "OS_IMAGE_DOWNLOAD_NOT_STARTED",
    OsImageDownloadInProgress = "OS_IMAGE_DOWNLOAD_IN_PROGRESS",
    OsUpdateNeedReboot = "OS_UPDATE_NEED_REBOOT"
}
/**
 * Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1OsUpdateStatus extends SpeakeasyBase {
    lastRebootTime?: string;
    lastUpdateCheckTime?: string;
    lastUpdateTime?: string;
    newPlatformVersion?: string;
    newRequestedPlatformVersion?: string;
    updateState?: GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum;
}

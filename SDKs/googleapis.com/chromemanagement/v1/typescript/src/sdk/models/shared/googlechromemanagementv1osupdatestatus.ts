import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum {
    UpdateStateUnspecified = "UPDATE_STATE_UNSPECIFIED",
    OsImageDownloadNotStarted = "OS_IMAGE_DOWNLOAD_NOT_STARTED",
    OsImageDownloadInProgress = "OS_IMAGE_DOWNLOAD_IN_PROGRESS",
    OsUpdateNeedReboot = "OS_UPDATE_NEED_REBOOT"
}


// GoogleChromeManagementV1OsUpdateStatus
/** 
 * Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1OsUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastRebootTime" })
  lastRebootTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateCheckTime" })
  lastUpdateCheckTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=newPlatformVersion" })
  newPlatformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=newRequestedPlatformVersion" })
  newRequestedPlatformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=updateState" })
  updateState?: GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum;
}

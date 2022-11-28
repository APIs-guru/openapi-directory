package shared

type GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum string

const (
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumUpdateStateUnspecified    GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "UPDATE_STATE_UNSPECIFIED"
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumOsImageDownloadNotStarted GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "OS_IMAGE_DOWNLOAD_NOT_STARTED"
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumOsImageDownloadInProgress GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "OS_IMAGE_DOWNLOAD_IN_PROGRESS"
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumOsUpdateNeedReboot        GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "OS_UPDATE_NEED_REBOOT"
)

// GoogleChromeManagementV1OsUpdateStatus
// Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1OsUpdateStatus struct {
	LastRebootTime              *string                                                `json:"lastRebootTime,omitempty"`
	LastUpdateCheckTime         *string                                                `json:"lastUpdateCheckTime,omitempty"`
	LastUpdateTime              *string                                                `json:"lastUpdateTime,omitempty"`
	NewPlatformVersion          *string                                                `json:"newPlatformVersion,omitempty"`
	NewRequestedPlatformVersion *string                                                `json:"newRequestedPlatformVersion,omitempty"`
	UpdateState                 *GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum `json:"updateState,omitempty"`
}

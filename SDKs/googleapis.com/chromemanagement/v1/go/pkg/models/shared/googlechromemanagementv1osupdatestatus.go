package shared

type GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum string

const (
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumUpdateStateUnspecified    GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "UPDATE_STATE_UNSPECIFIED"
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumOsImageDownloadNotStarted GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "OS_IMAGE_DOWNLOAD_NOT_STARTED"
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumOsImageDownloadInProgress GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "OS_IMAGE_DOWNLOAD_IN_PROGRESS"
	GoogleChromeManagementV1OsUpdateStatusUpdateStateEnumOsUpdateNeedReboot        GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum = "OS_UPDATE_NEED_REBOOT"
)

type GoogleChromeManagementV1OsUpdateStatus struct {
	LastRebootTime              *string                                                `json:"lastRebootTime,omitempty"`
	LastUpdateCheckTime         *string                                                `json:"lastUpdateCheckTime,omitempty"`
	LastUpdateTime              *string                                                `json:"lastUpdateTime,omitempty"`
	NewPlatformVersion          *string                                                `json:"newPlatformVersion,omitempty"`
	NewRequestedPlatformVersion *string                                                `json:"newRequestedPlatformVersion,omitempty"`
	UpdateState                 *GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum `json:"updateState,omitempty"`
}

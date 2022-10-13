package shared

type GoogleChromeManagementV1CountInstalledAppsResponse struct {
	InstalledApps []GoogleChromeManagementV1InstalledApp `json:"installedApps"`
	NextPageToken *string                                `json:"nextPageToken"`
	TotalSize     *int32                                 `json:"totalSize"`
}

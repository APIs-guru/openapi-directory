package shared

type GoogleChromeManagementV1CountInstalledAppsResponse struct {
	InstalledApps []GoogleChromeManagementV1InstalledApp `json:"installedApps,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
	TotalSize     *int32                                 `json:"totalSize,omitempty"`
}

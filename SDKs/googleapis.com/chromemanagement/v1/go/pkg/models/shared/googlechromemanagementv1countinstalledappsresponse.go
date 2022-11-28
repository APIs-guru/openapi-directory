package shared

// GoogleChromeManagementV1CountInstalledAppsResponse
// Response containing details of queried installed apps.
type GoogleChromeManagementV1CountInstalledAppsResponse struct {
	InstalledApps []GoogleChromeManagementV1InstalledApp `json:"installedApps,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
	TotalSize     *int32                                 `json:"totalSize,omitempty"`
}

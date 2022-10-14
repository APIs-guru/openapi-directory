package shared

type GoogleChromeManagementV1FindInstalledAppDevicesResponse struct {
	Devices       []GoogleChromeManagementV1Device `json:"devices,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
	TotalSize     *int32                           `json:"totalSize,omitempty"`
}

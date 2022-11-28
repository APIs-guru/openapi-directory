package shared

// GoogleChromeManagementV1FindInstalledAppDevicesResponse
// Response containing a list of devices with queried app installed.
type GoogleChromeManagementV1FindInstalledAppDevicesResponse struct {
	Devices       []GoogleChromeManagementV1Device `json:"devices,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
	TotalSize     *int32                           `json:"totalSize,omitempty"`
}

package shared

type GoogleChromeManagementV1FindInstalledAppDevicesResponse struct {
	Devices       []GoogleChromeManagementV1Device `json:"devices"`
	NextPageToken *string                          `json:"nextPageToken"`
	TotalSize     *int32                           `json:"totalSize"`
}

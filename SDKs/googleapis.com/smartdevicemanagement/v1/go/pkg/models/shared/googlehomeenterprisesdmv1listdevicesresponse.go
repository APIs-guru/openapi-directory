package shared

// GoogleHomeEnterpriseSdmV1ListDevicesResponse
// Response message for SmartDeviceManagementService.ListDevices
type GoogleHomeEnterpriseSdmV1ListDevicesResponse struct {
	Devices       []GoogleHomeEnterpriseSdmV1Device `json:"devices,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}

package shared

type GoogleChromeManagementV1ListTelemetryDevicesResponse struct {
	Devices       []GoogleChromeManagementV1TelemetryDevice `json:"devices"`
	NextPageToken *string                                   `json:"nextPageToken"`
}

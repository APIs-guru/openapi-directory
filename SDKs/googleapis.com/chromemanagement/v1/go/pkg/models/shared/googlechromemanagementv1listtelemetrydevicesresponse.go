package shared



type GoogleChromeManagementV1ListTelemetryDevicesResponse struct {
    Devices []GoogleChromeManagementV1TelemetryDevice `json:"devices,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}


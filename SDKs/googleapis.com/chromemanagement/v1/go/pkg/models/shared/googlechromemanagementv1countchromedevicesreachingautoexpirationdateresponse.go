package shared

// GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
// Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
type GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse struct {
	DeviceAueCountReports []GoogleChromeManagementV1DeviceAueCountReport `json:"deviceAueCountReports,omitempty"`
}

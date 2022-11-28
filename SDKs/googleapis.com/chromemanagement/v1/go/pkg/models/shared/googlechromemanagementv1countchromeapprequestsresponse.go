package shared

// GoogleChromeManagementV1CountChromeAppRequestsResponse
// Response containing summary of requested app installations.
type GoogleChromeManagementV1CountChromeAppRequestsResponse struct {
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
	RequestedApps []GoogleChromeManagementV1ChromeAppRequest `json:"requestedApps,omitempty"`
	TotalSize     *int32                                     `json:"totalSize,omitempty"`
}

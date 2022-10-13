package shared

type GoogleChromeManagementV1CountChromeAppRequestsResponse struct {
	NextPageToken *string                                    `json:"nextPageToken"`
	RequestedApps []GoogleChromeManagementV1ChromeAppRequest `json:"requestedApps"`
	TotalSize     *int32                                     `json:"totalSize"`
}

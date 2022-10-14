package shared

type GoogleChromeManagementV1CountChromeVersionsResponse struct {
	BrowserVersions []GoogleChromeManagementV1BrowserVersion `json:"browserVersions,omitempty"`
	NextPageToken   *string                                  `json:"nextPageToken,omitempty"`
	TotalSize       *int32                                   `json:"totalSize,omitempty"`
}

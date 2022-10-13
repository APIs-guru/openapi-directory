package shared

type GoogleChromeManagementV1CountChromeVersionsResponse struct {
	BrowserVersions []GoogleChromeManagementV1BrowserVersion `json:"browserVersions"`
	NextPageToken   *string                                  `json:"nextPageToken"`
	TotalSize       *int32                                   `json:"totalSize"`
}

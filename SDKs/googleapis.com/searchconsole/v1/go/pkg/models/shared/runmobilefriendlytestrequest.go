package shared

type RunMobileFriendlyTestRequest struct {
	RequestScreenshot *bool   `json:"requestScreenshot,omitempty"`
	URL               *string `json:"url,omitempty"`
}

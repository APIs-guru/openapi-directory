package shared

type RunMobileFriendlyTestRequest struct {
	RequestScreenshot *bool   `json:"requestScreenshot"`
	URL               *string `json:"url"`
}

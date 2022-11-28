package shared

// RunMobileFriendlyTestRequest
// Mobile-friendly test request.
type RunMobileFriendlyTestRequest struct {
	RequestScreenshot *bool   `json:"requestScreenshot,omitempty"`
	URL               *string `json:"url,omitempty"`
}

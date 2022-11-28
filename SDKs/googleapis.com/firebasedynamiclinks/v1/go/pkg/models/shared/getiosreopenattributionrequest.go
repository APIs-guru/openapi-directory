package shared

// GetIosReopenAttributionRequest
// Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
type GetIosReopenAttributionRequest struct {
	BundleID      *string `json:"bundleId,omitempty"`
	RequestedLink *string `json:"requestedLink,omitempty"`
	SdkVersion    *string `json:"sdkVersion,omitempty"`
}

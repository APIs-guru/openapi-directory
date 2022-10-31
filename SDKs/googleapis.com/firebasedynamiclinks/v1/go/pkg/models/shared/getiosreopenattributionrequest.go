package shared

type GetIosReopenAttributionRequest struct {
	BundleID      *string `json:"bundleId,omitempty"`
	RequestedLink *string `json:"requestedLink,omitempty"`
	SdkVersion    *string `json:"sdkVersion,omitempty"`
}

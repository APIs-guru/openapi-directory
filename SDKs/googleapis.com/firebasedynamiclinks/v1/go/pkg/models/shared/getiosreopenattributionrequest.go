package shared

type GetIosReopenAttributionRequest struct {
	BundleID      *string `json:"bundleId"`
	RequestedLink *string `json:"requestedLink"`
	SdkVersion    *string `json:"sdkVersion"`
}

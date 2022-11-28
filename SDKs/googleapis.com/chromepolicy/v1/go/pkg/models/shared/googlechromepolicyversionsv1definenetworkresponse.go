package shared

// GoogleChromePolicyVersionsV1DefineNetworkResponse
// Response object for creating a network.
type GoogleChromePolicyVersionsV1DefineNetworkResponse struct {
	NetworkID      *string                                      `json:"networkId,omitempty"`
	Settings       []GoogleChromePolicyVersionsV1NetworkSetting `json:"settings,omitempty"`
	TargetResource *string                                      `json:"targetResource,omitempty"`
}

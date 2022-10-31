package shared

type GoogleChromePolicyVersionsV1DefineNetworkResponse struct {
	NetworkID      *string                                      `json:"networkId,omitempty"`
	Settings       []GoogleChromePolicyVersionsV1NetworkSetting `json:"settings,omitempty"`
	TargetResource *string                                      `json:"targetResource,omitempty"`
}

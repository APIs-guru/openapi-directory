package shared

type GoogleChromePolicyV1DefineNetworkResponse struct {
	NetworkID      *string                              `json:"networkId"`
	Settings       []GoogleChromePolicyV1NetworkSetting `json:"settings"`
	TargetResource *string                              `json:"targetResource"`
}

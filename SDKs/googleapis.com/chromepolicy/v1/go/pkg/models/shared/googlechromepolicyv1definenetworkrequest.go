package shared

type GoogleChromePolicyV1DefineNetworkRequest struct {
	Name           *string                              `json:"name"`
	Settings       []GoogleChromePolicyV1NetworkSetting `json:"settings"`
	TargetResource *string                              `json:"targetResource"`
}

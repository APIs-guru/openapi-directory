package shared

type GoogleChromePolicyV1DefineNetworkRequest struct {
	Name           *string                              `json:"name,omitempty"`
	Settings       []GoogleChromePolicyV1NetworkSetting `json:"settings,omitempty"`
	TargetResource *string                              `json:"targetResource,omitempty"`
}

package shared

type GoogleChromePolicyV1RemoveNetworkRequest struct {
	NetworkID      *string `json:"networkId,omitempty"`
	TargetResource *string `json:"targetResource,omitempty"`
}

package shared

// GoogleChromePolicyVersionsV1RemoveNetworkRequest
// Request object for removing a network
type GoogleChromePolicyVersionsV1RemoveNetworkRequest struct {
	NetworkID      *string `json:"networkId,omitempty"`
	TargetResource *string `json:"targetResource,omitempty"`
}

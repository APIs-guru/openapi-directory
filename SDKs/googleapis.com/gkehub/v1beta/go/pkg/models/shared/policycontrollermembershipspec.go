package shared

// PolicyControllerMembershipSpec
// **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
type PolicyControllerMembershipSpec struct {
	PolicyControllerHubConfig *PolicyControllerHubConfig `json:"policyControllerHubConfig,omitempty"`
	Version                   *string                    `json:"version,omitempty"`
}

package shared

type PolicyControllerMembershipSpec struct {
	PolicyControllerHubConfig *PolicyControllerHubConfig `json:"policyControllerHubConfig,omitempty"`
	Version                   *string                    `json:"version,omitempty"`
}

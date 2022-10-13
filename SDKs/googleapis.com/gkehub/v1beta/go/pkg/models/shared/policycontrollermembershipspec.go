package shared

type PolicyControllerMembershipSpec struct {
	PolicyControllerHubConfig *PolicyControllerHubConfig `json:"policyControllerHubConfig"`
	Version                   *string                    `json:"version"`
}

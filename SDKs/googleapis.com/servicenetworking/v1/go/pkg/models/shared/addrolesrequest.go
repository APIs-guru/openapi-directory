package shared

type AddRolesRequest struct {
	ConsumerNetwork *string         `json:"consumerNetwork"`
	PolicyBinding   []PolicyBinding `json:"policyBinding"`
}

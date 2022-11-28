package shared

// AddRolesRequest
// Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.
type AddRolesRequest struct {
	ConsumerNetwork *string         `json:"consumerNetwork,omitempty"`
	PolicyBinding   []PolicyBinding `json:"policyBinding,omitempty"`
}

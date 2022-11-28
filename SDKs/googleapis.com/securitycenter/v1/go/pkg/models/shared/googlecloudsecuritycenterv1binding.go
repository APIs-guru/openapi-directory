package shared

// GoogleCloudSecuritycenterV1Binding
// Represents a Kubernetes RoleBinding or ClusterRoleBinding.
type GoogleCloudSecuritycenterV1Binding struct {
	Name     *string   `json:"name,omitempty"`
	Ns       *string   `json:"ns,omitempty"`
	Role     *Role     `json:"role,omitempty"`
	Subjects []Subject `json:"subjects,omitempty"`
}

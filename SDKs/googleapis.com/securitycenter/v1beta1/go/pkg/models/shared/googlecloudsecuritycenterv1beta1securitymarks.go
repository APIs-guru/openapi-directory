package shared

// GoogleCloudSecuritycenterV1beta1SecurityMarks
// User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
type GoogleCloudSecuritycenterV1beta1SecurityMarks struct {
	Marks map[string]string `json:"marks,omitempty"`
	Name  *string           `json:"name,omitempty"`
}

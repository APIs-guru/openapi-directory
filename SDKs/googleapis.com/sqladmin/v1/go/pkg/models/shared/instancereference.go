package shared

// InstanceReference
// Reference to another Cloud SQL instance.
type InstanceReference struct {
	Name    *string `json:"name,omitempty"`
	Project *string `json:"project,omitempty"`
	Region  *string `json:"region,omitempty"`
}

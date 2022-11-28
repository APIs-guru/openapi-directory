package shared

// ConfigurationSpec
// ConfigurationSpec holds the desired state of the Configuration (from the client).
type ConfigurationSpec struct {
	Template *RevisionTemplate `json:"template,omitempty"`
}

package shared

// Configuration
// Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#configuration
type Configuration struct {
	APIVersion *string              `json:"apiVersion,omitempty"`
	Kind       *string              `json:"kind,omitempty"`
	Metadata   *ObjectMeta          `json:"metadata,omitempty"`
	Spec       *ConfigurationSpec   `json:"spec,omitempty"`
	Status     *ConfigurationStatus `json:"status,omitempty"`
}

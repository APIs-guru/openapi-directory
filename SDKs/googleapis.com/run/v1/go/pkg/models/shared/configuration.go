package shared

type Configuration struct {
	APIVersion *string              `json:"apiVersion"`
	Kind       *string              `json:"kind"`
	Metadata   *ObjectMeta          `json:"metadata"`
	Spec       *ConfigurationSpec   `json:"spec"`
	Status     *ConfigurationStatus `json:"status"`
}

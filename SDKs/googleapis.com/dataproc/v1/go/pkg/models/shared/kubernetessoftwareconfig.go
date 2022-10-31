package shared

type KubernetesSoftwareConfig struct {
	ComponentVersion map[string]string `json:"componentVersion,omitempty"`
	Properties       map[string]string `json:"properties,omitempty"`
}

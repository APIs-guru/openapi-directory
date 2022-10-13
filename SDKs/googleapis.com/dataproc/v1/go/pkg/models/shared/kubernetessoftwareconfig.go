package shared

type KubernetesSoftwareConfig struct {
	ComponentVersion map[string]string `json:"componentVersion"`
	Properties       map[string]string `json:"properties"`
}

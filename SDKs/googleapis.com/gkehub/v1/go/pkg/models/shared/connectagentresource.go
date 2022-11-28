package shared

// ConnectAgentResource
// ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
type ConnectAgentResource struct {
	Manifest *string   `json:"manifest,omitempty"`
	Type     *TypeMeta `json:"type,omitempty"`
}

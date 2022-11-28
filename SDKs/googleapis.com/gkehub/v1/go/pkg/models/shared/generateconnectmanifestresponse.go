package shared

// GenerateConnectManifestResponse
// GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
type GenerateConnectManifestResponse struct {
	Manifest []ConnectAgentResource `json:"manifest,omitempty"`
}

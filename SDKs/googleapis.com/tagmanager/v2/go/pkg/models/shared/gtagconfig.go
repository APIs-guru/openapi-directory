package shared

// GtagConfig
// Represents a Google tag configuration.
type GtagConfig struct {
	AccountID     *string     `json:"accountId,omitempty"`
	ContainerID   *string     `json:"containerId,omitempty"`
	Fingerprint   *string     `json:"fingerprint,omitempty"`
	GtagConfigID  *string     `json:"gtagConfigId,omitempty"`
	Parameter     []Parameter `json:"parameter,omitempty"`
	Path          *string     `json:"path,omitempty"`
	TagManagerURL *string     `json:"tagManagerUrl,omitempty"`
	Type          *string     `json:"type,omitempty"`
	WorkspaceID   *string     `json:"workspaceId,omitempty"`
}

package shared

// SecretInput
// A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
type SecretInput struct {
	Labels      map[string]string `json:"labels,omitempty"`
	Replication *Replication      `json:"replication,omitempty"`
}

// Secret
// A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
type Secret struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Replication *Replication      `json:"replication,omitempty"`
}

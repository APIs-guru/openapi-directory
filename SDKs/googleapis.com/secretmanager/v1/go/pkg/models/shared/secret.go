package shared

// SecretInput
// A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
type SecretInput struct {
	Annotations    map[string]string `json:"annotations,omitempty"`
	Etag           *string           `json:"etag,omitempty"`
	ExpireTime     *string           `json:"expireTime,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	Replication    *Replication      `json:"replication,omitempty"`
	Rotation       *Rotation         `json:"rotation,omitempty"`
	Topics         []Topic           `json:"topics,omitempty"`
	TTL            *string           `json:"ttl,omitempty"`
	VersionAliases map[string]string `json:"versionAliases,omitempty"`
}

// Secret
// A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
type Secret struct {
	Annotations    map[string]string `json:"annotations,omitempty"`
	CreateTime     *string           `json:"createTime,omitempty"`
	Etag           *string           `json:"etag,omitempty"`
	ExpireTime     *string           `json:"expireTime,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	Name           *string           `json:"name,omitempty"`
	Replication    *Replication      `json:"replication,omitempty"`
	Rotation       *Rotation         `json:"rotation,omitempty"`
	Topics         []Topic           `json:"topics,omitempty"`
	TTL            *string           `json:"ttl,omitempty"`
	VersionAliases map[string]string `json:"versionAliases,omitempty"`
}

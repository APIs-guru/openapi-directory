package shared

type Topic struct {
	KmsKeyName               *string               `json:"kmsKeyName,omitempty"`
	Labels                   map[string]string     `json:"labels,omitempty"`
	MessageRetentionDuration *string               `json:"messageRetentionDuration,omitempty"`
	MessageStoragePolicy     *MessageStoragePolicy `json:"messageStoragePolicy,omitempty"`
	Name                     *string               `json:"name,omitempty"`
	SatisfiesPzs             *bool                 `json:"satisfiesPzs,omitempty"`
	SchemaSettings           *SchemaSettings       `json:"schemaSettings,omitempty"`
}

package shared

type Topic struct {
	KmsKeyName               *string               `json:"kmsKeyName"`
	Labels                   map[string]string     `json:"labels"`
	MessageRetentionDuration *string               `json:"messageRetentionDuration"`
	MessageStoragePolicy     *MessageStoragePolicy `json:"messageStoragePolicy"`
	Name                     *string               `json:"name"`
	SatisfiesPzs             *bool                 `json:"satisfiesPzs"`
	SchemaSettings           *SchemaSettings       `json:"schemaSettings"`
}

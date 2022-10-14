package shared

type Hl7SchemaConfig struct {
	MessageSchemaConfigs map[string]SchemaGroup `json:"messageSchemaConfigs,omitempty"`
	Version              []VersionSource        `json:"version,omitempty"`
}

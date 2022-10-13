package shared

type Hl7SchemaConfig struct {
	MessageSchemaConfigs map[string]SchemaGroup `json:"messageSchemaConfigs"`
	Version              []VersionSource        `json:"version"`
}

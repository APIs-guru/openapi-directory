package shared

// Hl7SchemaConfig
// Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.
type Hl7SchemaConfig struct {
	MessageSchemaConfigs map[string]SchemaGroup `json:"messageSchemaConfigs,omitempty"`
	Version              []VersionSource        `json:"version,omitempty"`
}

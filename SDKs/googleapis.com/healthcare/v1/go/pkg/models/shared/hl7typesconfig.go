package shared

// Hl7TypesConfig
// Root config for HL7v2 datatype definitions for a specific HL7v2 version.
type Hl7TypesConfig struct {
	Type    []Type          `json:"type,omitempty"`
	Version []VersionSource `json:"version,omitempty"`
}

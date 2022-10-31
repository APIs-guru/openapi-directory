package shared

type Hl7TypesConfig struct {
	Type    []Type          `json:"type,omitempty"`
	Version []VersionSource `json:"version,omitempty"`
}

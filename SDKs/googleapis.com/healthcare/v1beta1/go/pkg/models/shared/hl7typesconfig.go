package shared

type Hl7TypesConfig struct {
	Type    []Type          `json:"type"`
	Version []VersionSource `json:"version"`
}

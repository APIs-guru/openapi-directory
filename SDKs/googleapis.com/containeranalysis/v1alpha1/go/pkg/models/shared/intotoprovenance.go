package shared

type InTotoProvenance struct {
	BuilderConfig *BuilderConfig `json:"builderConfig"`
	Materials     []string       `json:"materials"`
	Metadata      *Metadata      `json:"metadata"`
	Recipe        *Recipe        `json:"recipe"`
}

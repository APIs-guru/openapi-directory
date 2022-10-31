package shared

type ApplicationInfo struct {
	Emails      []string `json:"emails,omitempty"`
	Instruction *string  `json:"instruction,omitempty"`
	Uris        []string `json:"uris,omitempty"`
}

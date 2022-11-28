package shared

// ApplicationInfo
// Application related details of a job posting.
type ApplicationInfo struct {
	Emails      []string `json:"emails,omitempty"`
	Instruction *string  `json:"instruction,omitempty"`
	Uris        []string `json:"uris,omitempty"`
}

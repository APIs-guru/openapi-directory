package shared

// NonCompliantFile
// Details about files that caused a compliance check to fail.
type NonCompliantFile struct {
	DisplayCommand *string `json:"displayCommand,omitempty"`
	Path           *string `json:"path,omitempty"`
	Reason         *string `json:"reason,omitempty"`
}

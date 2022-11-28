package shared

// NonCompliantFile
// Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.
type NonCompliantFile struct {
	DisplayCommand *string `json:"displayCommand,omitempty"`
	Path           *string `json:"path,omitempty"`
	Reason         *string `json:"reason,omitempty"`
}

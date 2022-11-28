package shared

// LogEntrySourceLocation
// Additional information about the source code location that produced the log entry.
type LogEntrySourceLocation struct {
	File     *string `json:"file,omitempty"`
	Function *string `json:"function,omitempty"`
	Line     *string `json:"line,omitempty"`
}

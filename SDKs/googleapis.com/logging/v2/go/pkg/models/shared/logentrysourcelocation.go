package shared

type LogEntrySourceLocation struct {
	File     *string `json:"file,omitempty"`
	Function *string `json:"function,omitempty"`
	Line     *string `json:"line,omitempty"`
}

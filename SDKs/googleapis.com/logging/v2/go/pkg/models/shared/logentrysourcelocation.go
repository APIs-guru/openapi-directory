package shared

type LogEntrySourceLocation struct {
	File     *string `json:"file"`
	Function *string `json:"function"`
	Line     *string `json:"line"`
}

package shared

type ScriptCompilationError struct {
	Column     string            `json:"column"`
	File       map[string]string `json:"file"`
	Line       string            `json:"line"`
	Message    map[string]string `json:"message"`
	RawMessage map[string]string `json:"rawMessage"`
}

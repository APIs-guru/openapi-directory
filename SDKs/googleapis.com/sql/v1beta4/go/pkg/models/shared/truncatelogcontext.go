package shared

// TruncateLogContext
// Database Instance truncate log context.
type TruncateLogContext struct {
	Kind    *string `json:"kind,omitempty"`
	LogType *string `json:"logType,omitempty"`
}

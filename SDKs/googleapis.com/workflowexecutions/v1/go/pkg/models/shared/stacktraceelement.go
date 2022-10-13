package shared

type StackTraceElement struct {
	Position *Position `json:"position"`
	Routine  *string   `json:"routine"`
	Step     *string   `json:"step"`
}

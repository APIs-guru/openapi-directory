package shared

// WriteResult
// The result of applying a write.
type WriteResult struct {
	TransformResults []Value `json:"transformResults,omitempty"`
	UpdateTime       *string `json:"updateTime,omitempty"`
}

package shared

type WriteResult struct {
	TransformResults []Value `json:"transformResults,omitempty"`
	UpdateTime       *string `json:"updateTime,omitempty"`
}

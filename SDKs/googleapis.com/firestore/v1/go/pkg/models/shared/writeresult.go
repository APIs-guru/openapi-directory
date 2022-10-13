package shared

type WriteResult struct {
	TransformResults []Value `json:"transformResults"`
	UpdateTime       *string `json:"updateTime"`
}

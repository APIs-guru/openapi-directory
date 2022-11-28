package shared

// Label
// Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().
type Label struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

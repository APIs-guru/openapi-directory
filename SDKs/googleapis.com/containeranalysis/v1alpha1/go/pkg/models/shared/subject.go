package shared

// Subject
// Subject refers to the subject of the intoto statement
type Subject struct {
	Digest map[string]string `json:"digest,omitempty"`
	Name   *string           `json:"name,omitempty"`
}

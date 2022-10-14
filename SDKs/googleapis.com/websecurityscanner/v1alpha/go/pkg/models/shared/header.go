package shared

type Header struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

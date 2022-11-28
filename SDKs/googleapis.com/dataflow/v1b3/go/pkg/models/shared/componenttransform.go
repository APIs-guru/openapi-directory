package shared

// ComponentTransform
// Description of a transform executed as part of an execution stage.
type ComponentTransform struct {
	Name              *string `json:"name,omitempty"`
	OriginalTransform *string `json:"originalTransform,omitempty"`
	UserName          *string `json:"userName,omitempty"`
}

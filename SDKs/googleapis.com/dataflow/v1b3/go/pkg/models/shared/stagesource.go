package shared

// StageSource
// Description of an input or output of an execution stage.
type StageSource struct {
	Name                          *string `json:"name,omitempty"`
	OriginalTransformOrCollection *string `json:"originalTransformOrCollection,omitempty"`
	SizeBytes                     *string `json:"sizeBytes,omitempty"`
	UserName                      *string `json:"userName,omitempty"`
}

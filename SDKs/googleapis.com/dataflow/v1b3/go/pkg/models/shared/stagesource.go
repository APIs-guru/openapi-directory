package shared

type StageSource struct {
	Name                          *string `json:"name,omitempty"`
	OriginalTransformOrCollection *string `json:"originalTransformOrCollection,omitempty"`
	SizeBytes                     *string `json:"sizeBytes,omitempty"`
	UserName                      *string `json:"userName,omitempty"`
}

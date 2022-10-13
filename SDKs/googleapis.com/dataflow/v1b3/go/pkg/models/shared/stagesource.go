package shared

type StageSource struct {
	Name                          *string `json:"name"`
	OriginalTransformOrCollection *string `json:"originalTransformOrCollection"`
	SizeBytes                     *string `json:"sizeBytes"`
	UserName                      *string `json:"userName"`
}

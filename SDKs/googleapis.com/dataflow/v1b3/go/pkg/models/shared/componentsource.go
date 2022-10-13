package shared

type ComponentSource struct {
	Name                          *string `json:"name"`
	OriginalTransformOrCollection *string `json:"originalTransformOrCollection"`
	UserName                      *string `json:"userName"`
}

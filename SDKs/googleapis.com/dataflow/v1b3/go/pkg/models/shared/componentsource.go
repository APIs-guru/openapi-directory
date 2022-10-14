package shared

type ComponentSource struct {
	Name                          *string `json:"name,omitempty"`
	OriginalTransformOrCollection *string `json:"originalTransformOrCollection,omitempty"`
	UserName                      *string `json:"userName,omitempty"`
}

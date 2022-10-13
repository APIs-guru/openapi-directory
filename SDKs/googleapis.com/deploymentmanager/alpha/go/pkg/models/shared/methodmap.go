package shared

type MethodMap struct {
	Create       *string `json:"create"`
	Delete       *string `json:"delete"`
	Get          *string `json:"get"`
	SetIamPolicy *string `json:"setIamPolicy"`
	Update       *string `json:"update"`
}

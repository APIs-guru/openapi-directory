package shared

type Namespace struct {
	IamPolicy *IamPolicy `json:"iamPolicy"`
	Name      *string    `json:"name"`
}

package shared

// Namespace
// Represents the information of a namespace
type Namespace struct {
	IamPolicy *IamPolicy `json:"iamPolicy,omitempty"`
	Name      *string    `json:"name,omitempty"`
}

package shared

type IamPolicy struct {
	Policy *Policy `json:"policy,omitempty"`
	Status *Status `json:"status,omitempty"`
}

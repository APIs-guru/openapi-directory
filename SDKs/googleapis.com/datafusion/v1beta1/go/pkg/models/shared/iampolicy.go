package shared

type IamPolicy struct {
	Policy *Policy `json:"policy"`
	Status *Status `json:"status"`
}

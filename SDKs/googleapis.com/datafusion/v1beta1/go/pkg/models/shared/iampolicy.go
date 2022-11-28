package shared

// IamPolicy
// IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
type IamPolicy struct {
	Policy *Policy `json:"policy,omitempty"`
	Status *Status `json:"status,omitempty"`
}

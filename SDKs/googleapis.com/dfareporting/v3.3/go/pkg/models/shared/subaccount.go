package shared

type Subaccount struct {
	AccountID              *string  `json:"accountId"`
	AvailablePermissionIds []string `json:"availablePermissionIds"`
	ID                     *string  `json:"id"`
	Kind                   *string  `json:"kind"`
	Name                   *string  `json:"name"`
}

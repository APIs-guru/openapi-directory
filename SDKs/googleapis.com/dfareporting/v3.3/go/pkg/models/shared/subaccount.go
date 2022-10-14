package shared

type Subaccount struct {
	AccountID              *string  `json:"accountId,omitempty"`
	AvailablePermissionIds []string `json:"availablePermissionIds,omitempty"`
	ID                     *string  `json:"id,omitempty"`
	Kind                   *string  `json:"kind,omitempty"`
	Name                   *string  `json:"name,omitempty"`
}

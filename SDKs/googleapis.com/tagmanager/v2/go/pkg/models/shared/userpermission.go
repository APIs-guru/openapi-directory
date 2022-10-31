package shared

type UserPermission struct {
	AccountAccess   *AccountAccess    `json:"accountAccess,omitempty"`
	AccountID       *string           `json:"accountId,omitempty"`
	ContainerAccess []ContainerAccess `json:"containerAccess,omitempty"`
	EmailAddress    *string           `json:"emailAddress,omitempty"`
	Path            *string           `json:"path,omitempty"`
}

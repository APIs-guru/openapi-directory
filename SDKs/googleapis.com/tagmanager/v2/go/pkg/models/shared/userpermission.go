package shared

type UserPermission struct {
	AccountAccess   *AccountAccess    `json:"accountAccess"`
	AccountID       *string           `json:"accountId"`
	ContainerAccess []ContainerAccess `json:"containerAccess"`
	EmailAddress    *string           `json:"emailAddress"`
	Path            *string           `json:"path"`
}

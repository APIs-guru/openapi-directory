package shared

type UserAccess struct {
	AccountAccess   *AccountAccess    `json:"accountAccess"`
	AccountID       *string           `json:"accountId"`
	ContainerAccess []ContainerAccess `json:"containerAccess"`
	EmailAddress    *string           `json:"emailAddress"`
	PermissionID    *string           `json:"permissionId"`
}

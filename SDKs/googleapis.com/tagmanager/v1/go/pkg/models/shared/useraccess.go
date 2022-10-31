package shared



type UserAccess struct {
    AccountAccess *AccountAccess `json:"accountAccess,omitempty"`
    AccountID *string `json:"accountId,omitempty"`
    ContainerAccess []ContainerAccess `json:"containerAccess,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    PermissionID *string `json:"permissionId,omitempty"`
    
}


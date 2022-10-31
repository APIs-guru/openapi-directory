package shared



type User struct {
    DisplayName *string `json:"displayName,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Me *bool `json:"me,omitempty"`
    PermissionID *string `json:"permissionId,omitempty"`
    PhotoLink *string `json:"photoLink,omitempty"`
    
}


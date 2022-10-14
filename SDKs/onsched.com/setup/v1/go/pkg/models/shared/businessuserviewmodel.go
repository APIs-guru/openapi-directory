package shared

type BusinessUserViewModel struct {
	AccountID       *string `json:"accountId,omitempty"`
	BusinessName    *string `json:"businessName,omitempty"`
	Email           *string `json:"email,omitempty"`
	ID              *string `json:"id,omitempty"`
	IdentityAccount *bool   `json:"identityAccount,omitempty"`
	LocationID      *string `json:"locationId,omitempty"`
	Name            *string `json:"name,omitempty"`
	ObjectName      *string `json:"objectName,omitempty"`
	ResourceID      *string `json:"resourceId,omitempty"`
	ResourceName    *string `json:"resourceName,omitempty"`
	Role            *string `json:"role,omitempty"`
}

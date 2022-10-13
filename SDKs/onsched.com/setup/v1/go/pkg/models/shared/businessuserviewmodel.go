package shared

type BusinessUserViewModel struct {
	AccountID       *string `json:"accountId"`
	BusinessName    *string `json:"businessName"`
	Email           *string `json:"email"`
	ID              *string `json:"id"`
	IdentityAccount *bool   `json:"identityAccount"`
	LocationID      *string `json:"locationId"`
	Name            *string `json:"name"`
	ObjectName      *string `json:"objectName"`
	ResourceID      *string `json:"resourceId"`
	ResourceName    *string `json:"resourceName"`
	Role            *string `json:"role"`
}

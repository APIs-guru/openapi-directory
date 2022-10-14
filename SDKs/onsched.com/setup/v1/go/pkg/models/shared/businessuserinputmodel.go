package shared

type BusinessUserInputModel struct {
	Email                  *string `json:"email,omitempty"`
	LocationID             *string `json:"locationId,omitempty"`
	Name                   *string `json:"name,omitempty"`
	ResourceID             *string `json:"resourceId,omitempty"`
	Role                   *string `json:"role,omitempty"`
	SendRegistrationInvite *bool   `json:"sendRegistrationInvite,omitempty"`
}

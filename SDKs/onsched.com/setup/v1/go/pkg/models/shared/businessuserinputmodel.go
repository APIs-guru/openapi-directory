package shared

type BusinessUserInputModel struct {
	Email                  *string `json:"email"`
	LocationID             *string `json:"locationId"`
	Name                   *string `json:"name"`
	ResourceID             *string `json:"resourceId"`
	Role                   *string `json:"role"`
	SendRegistrationInvite *bool   `json:"sendRegistrationInvite"`
}

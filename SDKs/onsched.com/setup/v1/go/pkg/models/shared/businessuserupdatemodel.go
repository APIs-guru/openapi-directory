package shared

type BusinessUserUpdateModel struct {
	Email                  *string `json:"email"`
	Name                   *string `json:"name"`
	ResourceID             *string `json:"resourceId"`
	Role                   *string `json:"role"`
	SendRegistrationInvite *bool   `json:"sendRegistrationInvite"`
}

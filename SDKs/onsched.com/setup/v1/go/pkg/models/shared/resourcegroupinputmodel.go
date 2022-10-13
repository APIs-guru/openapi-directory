package shared

type ResourceGroupInputModel struct {
	Description *string `json:"description"`
	Email       *string `json:"email"`
	LocationID  *string `json:"locationId"`
	Name        *string `json:"name"`
}

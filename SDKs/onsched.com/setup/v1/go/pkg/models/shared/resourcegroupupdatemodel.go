package shared

type ResourceGroupUpdateModel struct {
	Description *string `json:"description"`
	Email       *string `json:"email"`
	Name        *string `json:"name"`
}

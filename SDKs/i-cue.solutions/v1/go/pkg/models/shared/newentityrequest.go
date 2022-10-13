package shared

type NewEntityRequest struct {
	Address *string `json:"address"`
	Email   *string `json:"email"`
	Name    *string `json:"name"`
}

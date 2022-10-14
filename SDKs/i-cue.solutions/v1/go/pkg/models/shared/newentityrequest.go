package shared

type NewEntityRequest struct {
	Address *string `json:"address,omitempty"`
	Email   *string `json:"email,omitempty"`
	Name    *string `json:"name,omitempty"`
}

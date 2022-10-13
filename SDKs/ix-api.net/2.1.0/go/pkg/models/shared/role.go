package shared

type Role struct {
	ID             string   `json:"id"`
	Name           string   `json:"name"`
	RequiredFields []string `json:"required_fields"`
}

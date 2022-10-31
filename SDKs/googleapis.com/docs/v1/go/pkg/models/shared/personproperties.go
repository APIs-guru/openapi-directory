package shared

type PersonProperties struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

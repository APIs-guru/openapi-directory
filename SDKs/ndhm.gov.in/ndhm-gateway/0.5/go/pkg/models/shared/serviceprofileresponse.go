package shared

type ServiceProfileResponse struct {
	Active    *bool            `json:"active"`
	Endpoints []Endpoint       `json:"endpoints"`
	ID        *string          `json:"id"`
	Name      *string          `json:"name"`
	Type      *ServiceRoleEnum `json:"type"`
}

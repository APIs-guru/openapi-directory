package shared

type ServiceProfileResponse struct {
	Active    *bool            `json:"active,omitempty"`
	Endpoints []Endpoint       `json:"endpoints,omitempty"`
	ID        *string          `json:"id,omitempty"`
	Name      *string          `json:"name,omitempty"`
	Type      *ServiceRoleEnum `json:"type,omitempty"`
}

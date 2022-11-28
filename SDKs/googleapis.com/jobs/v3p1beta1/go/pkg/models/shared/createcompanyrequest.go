package shared

// CreateCompanyRequest
// Input only. The Request of the CreateCompany method.
type CreateCompanyRequest struct {
	Company *Company `json:"company,omitempty"`
}

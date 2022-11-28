package shared

// ServiceBusinessContext
// Additional data for service business verification.
type ServiceBusinessContext struct {
	Address *PostalAddress `json:"address,omitempty"`
}

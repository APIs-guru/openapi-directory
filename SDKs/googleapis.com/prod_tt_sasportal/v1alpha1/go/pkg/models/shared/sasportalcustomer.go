package shared

// SasPortalCustomer
// Entity representing a SAS customer.
type SasPortalCustomer struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Name        *string  `json:"name,omitempty"`
	SasUserIds  []string `json:"sasUserIds,omitempty"`
}

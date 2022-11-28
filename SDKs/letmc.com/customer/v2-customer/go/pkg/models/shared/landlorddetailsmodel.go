package shared

// LandlordDetailsModel
// Landlord Details
type LandlordDetailsModel struct {
	Address         *string `json:"Address,omitempty"`
	Email           *string `json:"Email,omitempty"`
	GlobalReference *string `json:"GlobalReference,omitempty"`
	ID              *string `json:"ID,omitempty"`
	Mobile          *string `json:"Mobile,omitempty"`
	Name            *string `json:"Name,omitempty"`
	Phone           *string `json:"Phone,omitempty"`
}

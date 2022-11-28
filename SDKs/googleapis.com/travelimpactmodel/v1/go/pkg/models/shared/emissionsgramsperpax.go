package shared

// EmissionsGramsPerPax
// Grouped emissions per seating class results.
type EmissionsGramsPerPax struct {
	Business       *int32 `json:"business,omitempty"`
	Economy        *int32 `json:"economy,omitempty"`
	First          *int32 `json:"first,omitempty"`
	PremiumEconomy *int32 `json:"premiumEconomy,omitempty"`
}

package shared

// LandlordRentArrearsModel
// Landlord Rent Arrears.
type LandlordRentArrearsModel struct {
	ChaseNotes       []LandlordChaseNoteModel     `json:"ChaseNotes,omitempty"`
	RentCollected    *float64                     `json:"RentCollected,omitempty"`
	RentOutstanding  []LandlordRentOustandingItem `json:"RentOutstanding,omitempty"`
	TotalRentArrears *float64                     `json:"TotalRentArrears,omitempty"`
}

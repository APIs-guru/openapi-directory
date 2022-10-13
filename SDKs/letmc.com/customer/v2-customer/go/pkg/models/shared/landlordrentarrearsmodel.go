package shared

type LandlordRentArrearsModel struct {
	ChaseNotes       []LandlordChaseNoteModel     `json:"ChaseNotes"`
	RentCollected    *float64                     `json:"RentCollected"`
	RentOutstanding  []LandlordRentOustandingItem `json:"RentOutstanding"`
	TotalRentArrears *float64                     `json:"TotalRentArrears"`
}

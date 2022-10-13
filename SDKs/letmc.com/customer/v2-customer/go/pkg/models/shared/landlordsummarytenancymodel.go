package shared

type LandlordSummaryTenancyModel struct {
	Bond            *float64 `json:"Bond"`
	BranchID        *string  `json:"BranchID"`
	Description     *string  `json:"Description"`
	GlobalReference *string  `json:"GlobalReference"`
	ID              *string  `json:"ID"`
	MaintenanceJobs *int32   `json:"MaintenanceJobs"`
	ManagedRent     *bool    `json:"ManagedRent"`
	PropertyAddress *string  `json:"PropertyAddress"`
	Rent            *string  `json:"Rent"`
	RentArrears     *float64 `json:"RentArrears"`
	RentCollected   *float64 `json:"RentCollected"`
	TenancyProperty *string  `json:"TenancyProperty"`
	TenancyState    *string  `json:"TenancyState"`
}

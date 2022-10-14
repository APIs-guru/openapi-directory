package shared

type LandlordSummaryTenancyModel struct {
	Bond            *float64 `json:"Bond,omitempty"`
	BranchID        *string  `json:"BranchID,omitempty"`
	Description     *string  `json:"Description,omitempty"`
	GlobalReference *string  `json:"GlobalReference,omitempty"`
	ID              *string  `json:"ID,omitempty"`
	MaintenanceJobs *int32   `json:"MaintenanceJobs,omitempty"`
	ManagedRent     *bool    `json:"ManagedRent,omitempty"`
	PropertyAddress *string  `json:"PropertyAddress,omitempty"`
	Rent            *string  `json:"Rent,omitempty"`
	RentArrears     *float64 `json:"RentArrears,omitempty"`
	RentCollected   *float64 `json:"RentCollected,omitempty"`
	TenancyProperty *string  `json:"TenancyProperty,omitempty"`
	TenancyState    *string  `json:"TenancyState,omitempty"`
}

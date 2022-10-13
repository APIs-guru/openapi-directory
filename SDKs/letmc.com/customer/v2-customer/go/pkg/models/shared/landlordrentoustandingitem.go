package shared

type LandlordRentOustandingItem struct {
	DebtDays        *int32   `json:"DebtDays"`
	OutstandingRent *float64 `json:"OutstandingRent"`
	Property        *string  `json:"Property"`
	Tenant          *string  `json:"Tenant"`
	TenantID        *string  `json:"TenantID"`
}

package shared

type LandlordRentOustandingItem struct {
	DebtDays        *int32   `json:"DebtDays,omitempty"`
	OutstandingRent *float64 `json:"OutstandingRent,omitempty"`
	Property        *string  `json:"Property,omitempty"`
	Tenant          *string  `json:"Tenant,omitempty"`
	TenantID        *string  `json:"TenantID,omitempty"`
}

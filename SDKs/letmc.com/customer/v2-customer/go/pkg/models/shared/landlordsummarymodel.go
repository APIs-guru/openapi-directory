package shared

import (
	"time"
)

// LandlordSummaryModel
// Landlord Summary - Landing Page.
type LandlordSummaryModel struct {
	AccountBalance   *float64                      `json:"AccountBalance,omitempty"`
	LastPayment      *time.Time                    `json:"LastPayment,omitempty"`
	Tenancies        []LandlordSummaryTenancyModel `json:"Tenancies,omitempty"`
	TotalRentArrears *float64                      `json:"TotalRentArrears,omitempty"`
}

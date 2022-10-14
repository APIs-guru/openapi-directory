package shared

import (
	"time"
)

type LandlordSummaryModel struct {
	AccountBalance   *float64                      `json:"AccountBalance,omitempty"`
	LastPayment      *time.Time                    `json:"LastPayment,omitempty"`
	Tenancies        []LandlordSummaryTenancyModel `json:"Tenancies,omitempty"`
	TotalRentArrears *float64                      `json:"TotalRentArrears,omitempty"`
}

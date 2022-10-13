package shared

import (
	"time"
)

type LandlordSummaryModel struct {
	AccountBalance   *float64                      `json:"AccountBalance"`
	LastPayment      *time.Time                    `json:"LastPayment"`
	Tenancies        []LandlordSummaryTenancyModel `json:"Tenancies"`
	TotalRentArrears *float64                      `json:"TotalRentArrears"`
}

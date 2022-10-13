package shared

import (
	"time"
)

type BillSummary struct {
	BillID              *int32        `json:"billId"`
	BillTypeID          *int32        `json:"billTypeId"`
	BillWithdrawn       *time.Time    `json:"billWithdrawn"`
	CurrentHouse        *HouseEnum    `json:"currentHouse"`
	CurrentStage        *StageSummary `json:"currentStage"`
	IncludedSessionIds  []int32       `json:"includedSessionIds"`
	IntroducedSessionID *int32        `json:"introducedSessionId"`
	IsAct               *bool         `json:"isAct"`
	IsDefeated          *bool         `json:"isDefeated"`
	LastUpdate          *time.Time    `json:"lastUpdate"`
	OriginatingHouse    *HouseEnum    `json:"originatingHouse"`
	ShortTitle          *string       `json:"shortTitle"`
}

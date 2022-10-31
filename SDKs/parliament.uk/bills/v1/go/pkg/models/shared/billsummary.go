package shared

import (
	"time"
)

type BillSummary struct {
	BillID              *int32        `json:"billId,omitempty"`
	BillTypeID          *int32        `json:"billTypeId,omitempty"`
	BillWithdrawn       *time.Time    `json:"billWithdrawn,omitempty"`
	CurrentHouse        *HouseEnum    `json:"currentHouse,omitempty"`
	CurrentStage        *StageSummary `json:"currentStage,omitempty"`
	IncludedSessionIds  []int32       `json:"includedSessionIds,omitempty"`
	IntroducedSessionID *int32        `json:"introducedSessionId,omitempty"`
	IsAct               *bool         `json:"isAct,omitempty"`
	IsDefeated          *bool         `json:"isDefeated,omitempty"`
	LastUpdate          *time.Time    `json:"lastUpdate,omitempty"`
	OriginatingHouse    *HouseEnum    `json:"originatingHouse,omitempty"`
	ShortTitle          *string       `json:"shortTitle,omitempty"`
}

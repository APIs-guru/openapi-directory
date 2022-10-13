package shared

import (
	"time"
)

type Bill struct {
	Agent               *BillAgent    `json:"agent"`
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
	LongTitle           *string       `json:"longTitle"`
	OriginatingHouse    *HouseEnum    `json:"originatingHouse"`
	PetitionInformation *string       `json:"petitionInformation"`
	PetitioningPeriod   *string       `json:"petitioningPeriod"`
	Promoters           []Promoter    `json:"promoters"`
	ShortTitle          *string       `json:"shortTitle"`
	Sponsors            []Sponsor     `json:"sponsors"`
	Summary             *string       `json:"summary"`
}

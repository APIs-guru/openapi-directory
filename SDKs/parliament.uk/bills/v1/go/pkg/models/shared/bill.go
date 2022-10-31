package shared

import (
"time")

type Bill struct {
    Agent *BillAgent `json:"agent,omitempty"`
    BillID *int32 `json:"billId,omitempty"`
    BillTypeID *int32 `json:"billTypeId,omitempty"`
    BillWithdrawn *time.Time `json:"billWithdrawn,omitempty"`
    CurrentHouse *HouseEnum `json:"currentHouse,omitempty"`
    CurrentStage *StageSummary `json:"currentStage,omitempty"`
    IncludedSessionIds []int32 `json:"includedSessionIds,omitempty"`
    IntroducedSessionID *int32 `json:"introducedSessionId,omitempty"`
    IsAct *bool `json:"isAct,omitempty"`
    IsDefeated *bool `json:"isDefeated,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    LongTitle *string `json:"longTitle,omitempty"`
    OriginatingHouse *HouseEnum `json:"originatingHouse,omitempty"`
    PetitionInformation *string `json:"petitionInformation,omitempty"`
    PetitioningPeriod *string `json:"petitioningPeriod,omitempty"`
    Promoters []Promoter `json:"promoters,omitempty"`
    ShortTitle *string `json:"shortTitle,omitempty"`
    Sponsors []Sponsor `json:"sponsors,omitempty"`
    Summary *string `json:"summary,omitempty"`
    
}


package shared

import (
"time")

type BillStageDetails struct {
    Abbreviation *string `json:"abbreviation,omitempty"`
    Committee *Committee `json:"committee,omitempty"`
    Description *string `json:"description,omitempty"`
    House *HouseEnum `json:"house,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    NextStageBillStageID *int32 `json:"nextStageBillStageId,omitempty"`
    PreviousStageBillStageID *int32 `json:"previousStageBillStageId,omitempty"`
    SessionID *int32 `json:"sessionId,omitempty"`
    SortOrder *int32 `json:"sortOrder,omitempty"`
    StageID *int32 `json:"stageId,omitempty"`
    StageSittings []BillStageSitting `json:"stageSittings,omitempty"`
    
}


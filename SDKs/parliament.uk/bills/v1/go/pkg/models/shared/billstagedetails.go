package shared

import (
	"time"
)

type BillStageDetails struct {
	Abbreviation             *string            `json:"abbreviation"`
	Committee                *Committee         `json:"committee"`
	Description              *string            `json:"description"`
	House                    *HouseEnum         `json:"house"`
	ID                       *int32             `json:"id"`
	LastUpdate               *time.Time         `json:"lastUpdate"`
	NextStageBillStageID     *int32             `json:"nextStageBillStageId"`
	PreviousStageBillStageID *int32             `json:"previousStageBillStageId"`
	SessionID                *int32             `json:"sessionId"`
	SortOrder                *int32             `json:"sortOrder"`
	StageID                  *int32             `json:"stageId"`
	StageSittings            []BillStageSitting `json:"stageSittings"`
}

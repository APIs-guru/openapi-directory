package shared

import (
	"time"
)

type BillStageSitting struct {
	BillID      *int32     `json:"billId"`
	BillStageID *int32     `json:"billStageId"`
	Date        *time.Time `json:"date"`
	ID          *int32     `json:"id"`
	StageID     *int32     `json:"stageId"`
}

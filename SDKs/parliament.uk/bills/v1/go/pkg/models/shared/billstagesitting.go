package shared

import (
	"time"
)

type BillStageSitting struct {
	BillID      *int32     `json:"billId,omitempty"`
	BillStageID *int32     `json:"billStageId,omitempty"`
	Date        *time.Time `json:"date,omitempty"`
	ID          *int32     `json:"id,omitempty"`
	StageID     *int32     `json:"stageId,omitempty"`
}

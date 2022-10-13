package shared

import (
	"time"
)

type ReportResponse struct {
	Created             *time.Time `json:"created"`
	FileID              *string    `json:"file_id"`
	ProcessingAlgorithm *string    `json:"processing_algorithm"`
	ReportNumber        *int64     `json:"report_number"`
	Result              *Result    `json:"result"`
}

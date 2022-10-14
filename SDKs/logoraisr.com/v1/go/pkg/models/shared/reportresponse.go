package shared

import (
	"time"
)

type ReportResponse struct {
	Created             *time.Time `json:"created,omitempty"`
	FileID              *string    `json:"file_id,omitempty"`
	ProcessingAlgorithm *string    `json:"processing_algorithm,omitempty"`
	ReportNumber        *int64     `json:"report_number,omitempty"`
	Result              *Result    `json:"result,omitempty"`
}

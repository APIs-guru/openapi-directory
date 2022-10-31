package shared

import (
	"time"
)

type Report struct {
	Created      *time.Time `json:"created,omitempty"`
	FileID       string     `json:"file_id"`
	ProcessID    int64      `json:"process_id"`
	ReportNumber int64      `json:"report_number"`
	Result       *Result    `json:"result,omitempty"`
	ResultID     int64      `json:"result_id"`
}

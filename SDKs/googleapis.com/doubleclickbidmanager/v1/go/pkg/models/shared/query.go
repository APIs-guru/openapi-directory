package shared

type Query struct {
	Kind                  *string        `json:"kind"`
	Metadata              *QueryMetadata `json:"metadata"`
	Params                *Parameters    `json:"params"`
	QueryID               *string        `json:"queryId"`
	ReportDataEndTimeMs   *string        `json:"reportDataEndTimeMs"`
	ReportDataStartTimeMs *string        `json:"reportDataStartTimeMs"`
	Schedule              *QuerySchedule `json:"schedule"`
	TimezoneCode          *string        `json:"timezoneCode"`
}

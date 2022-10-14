package shared

type Query struct {
	Kind                  *string        `json:"kind,omitempty"`
	Metadata              *QueryMetadata `json:"metadata,omitempty"`
	Params                *Parameters    `json:"params,omitempty"`
	QueryID               *string        `json:"queryId,omitempty"`
	ReportDataEndTimeMs   *string        `json:"reportDataEndTimeMs,omitempty"`
	ReportDataStartTimeMs *string        `json:"reportDataStartTimeMs,omitempty"`
	Schedule              *QuerySchedule `json:"schedule,omitempty"`
	TimezoneCode          *string        `json:"timezoneCode,omitempty"`
}

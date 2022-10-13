package shared

type ActivityLogEntryQueryResult struct {
	Items            []ActivityLogEntry `json:"Items"`
	StartIndex       *int32             `json:"StartIndex"`
	TotalRecordCount *int32             `json:"TotalRecordCount"`
}

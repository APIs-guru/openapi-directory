package shared

type ExportMessagesRequest struct {
	EndTime        *string         `json:"endTime"`
	GcsDestination *GcsDestination `json:"gcsDestination"`
	StartTime      *string         `json:"startTime"`
}

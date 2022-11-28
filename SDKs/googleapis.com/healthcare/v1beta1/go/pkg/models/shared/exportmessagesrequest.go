package shared

// ExportMessagesRequest
// Request to schedule an export.
type ExportMessagesRequest struct {
	EndTime        *string         `json:"endTime,omitempty"`
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
	StartTime      *string         `json:"startTime,omitempty"`
}

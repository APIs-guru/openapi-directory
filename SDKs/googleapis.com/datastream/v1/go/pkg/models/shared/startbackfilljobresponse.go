package shared

// StartBackfillJobResponse
// Response for manually initiating a backfill job for a specific stream object.
type StartBackfillJobResponse struct {
	Object *StreamObject `json:"object,omitempty"`
}

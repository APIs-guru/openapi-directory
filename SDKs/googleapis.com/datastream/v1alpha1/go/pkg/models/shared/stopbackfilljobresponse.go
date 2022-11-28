package shared

// StopBackfillJobResponse
// Response for manually stop a backfill job for a specific stream object.
type StopBackfillJobResponse struct {
	Object *StreamObject `json:"object,omitempty"`
}

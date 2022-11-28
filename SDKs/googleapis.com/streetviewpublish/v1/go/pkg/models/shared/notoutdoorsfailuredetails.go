package shared

// NotOutdoorsFailureDetails
// Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.
type NotOutdoorsFailureDetails struct {
	StartTime *string `json:"startTime,omitempty"`
}

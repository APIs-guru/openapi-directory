package shared

// CheckInResponse
// The response to the CheckIn method.
type CheckInResponse struct {
	Deadline *string                `json:"deadline,omitempty"`
	Features map[string]interface{} `json:"features,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty"`
}

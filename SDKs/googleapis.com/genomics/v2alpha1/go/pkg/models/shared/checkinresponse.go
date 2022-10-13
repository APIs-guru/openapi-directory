package shared

type CheckInResponse struct {
	Deadline *string                `json:"deadline"`
	Features map[string]interface{} `json:"features"`
	Metadata map[string]interface{} `json:"metadata"`
}

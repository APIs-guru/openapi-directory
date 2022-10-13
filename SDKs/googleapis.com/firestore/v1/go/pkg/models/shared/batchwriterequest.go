package shared

type BatchWriteRequest struct {
	Labels map[string]string `json:"labels"`
	Writes []Write           `json:"writes"`
}

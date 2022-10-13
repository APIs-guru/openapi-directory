package shared

type WorkerMessageCode struct {
	Code       *string                `json:"code"`
	Parameters map[string]interface{} `json:"parameters"`
}

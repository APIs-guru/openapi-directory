package shared

type InfoResponse struct {
	Bbox     *string                `json:"bbox"`
	Features map[string]interface{} `json:"features"`
	Version  *string                `json:"version"`
}

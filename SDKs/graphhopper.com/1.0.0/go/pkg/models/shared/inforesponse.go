package shared

type InfoResponse struct {
	Bbox     *string                `json:"bbox,omitempty"`
	Features map[string]interface{} `json:"features,omitempty"`
	Version  *string                `json:"version,omitempty"`
}

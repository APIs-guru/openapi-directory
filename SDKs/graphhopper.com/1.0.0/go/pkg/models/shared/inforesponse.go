package shared

// InfoResponse
// Information about the server and the geographical area that it covers.
type InfoResponse struct {
	Bbox     *string                `json:"bbox,omitempty"`
	Features map[string]interface{} `json:"features,omitempty"`
	Version  *string                `json:"version,omitempty"`
}

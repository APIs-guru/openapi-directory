package shared

// ResponseInfo
// Additional information for your request
type ResponseInfo struct {
	Copyrights []string `json:"copyrights,omitempty"`
	Took       *float64 `json:"took,omitempty"`
}

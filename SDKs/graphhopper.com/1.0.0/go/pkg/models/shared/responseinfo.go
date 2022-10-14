package shared

type ResponseInfo struct {
	Copyrights []string `json:"copyrights,omitempty"`
	Took       *float64 `json:"took,omitempty"`
}

package shared

type ResponseInfo struct {
	Copyrights []string `json:"copyrights"`
	Took       *float64 `json:"took"`
}

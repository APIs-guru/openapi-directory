package shared

type GoogleLongrunningOperation struct {
	Done     *bool                  `json:"done"`
	Error    *Status                `json:"error"`
	Metadata map[string]interface{} `json:"metadata"`
	Name     *string                `json:"name"`
	Response map[string]interface{} `json:"response"`
}

package shared

type Operation struct {
	Done     *bool                  `json:"done"`
	Error    *Status                `json:"error"`
	Response map[string]interface{} `json:"response"`
}

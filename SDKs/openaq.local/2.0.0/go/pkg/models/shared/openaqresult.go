package shared

type OpenAqResult struct {
	Meta    *Meta         `json:"meta"`
	Results []interface{} `json:"results"`
}

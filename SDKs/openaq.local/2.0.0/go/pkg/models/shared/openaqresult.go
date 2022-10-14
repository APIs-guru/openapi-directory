package shared

type OpenAqResult struct {
	Meta    *Meta         `json:"meta,omitempty"`
	Results []interface{} `json:"results,omitempty"`
}

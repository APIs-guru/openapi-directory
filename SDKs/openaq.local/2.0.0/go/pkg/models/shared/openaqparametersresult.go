package shared

type OpenAqParametersResult struct {
	Meta    *Meta           `json:"meta"`
	Results []ParametersRow `json:"results"`
}

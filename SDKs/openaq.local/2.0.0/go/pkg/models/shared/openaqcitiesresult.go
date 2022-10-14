package shared

type OpenAqCitiesResult struct {
	Meta    *Meta       `json:"meta,omitempty"`
	Results []CitiesRow `json:"results"`
}

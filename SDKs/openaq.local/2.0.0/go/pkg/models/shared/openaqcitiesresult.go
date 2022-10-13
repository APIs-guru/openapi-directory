package shared

type OpenAqCitiesResult struct {
	Meta    *Meta       `json:"meta"`
	Results []CitiesRow `json:"results"`
}

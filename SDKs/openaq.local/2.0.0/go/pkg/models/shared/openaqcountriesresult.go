package shared

type OpenAqCountriesResult struct {
	Meta    *Meta          `json:"meta"`
	Results []CountriesRow `json:"results"`
}

package shared

type CountriesListResponse struct {
	Countries []Country `json:"countries"`
	Kind      *string   `json:"kind"`
}

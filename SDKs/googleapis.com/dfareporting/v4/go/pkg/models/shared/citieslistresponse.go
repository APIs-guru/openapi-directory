package shared

// CitiesListResponse
// City List Response
type CitiesListResponse struct {
	Cities []City  `json:"cities,omitempty"`
	Kind   *string `json:"kind,omitempty"`
}

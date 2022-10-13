package shared

type CitiesListResponse struct {
	Cities []City  `json:"cities"`
	Kind   *string `json:"kind"`
}

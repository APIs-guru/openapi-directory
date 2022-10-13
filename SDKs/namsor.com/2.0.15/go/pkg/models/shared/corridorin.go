package shared

type CorridorIn struct {
	FirstLastNameGeoFrom *FirstLastNameGeoIn `json:"firstLastNameGeoFrom"`
	FirstLastNameGeoTo   *FirstLastNameGeoIn `json:"firstLastNameGeoTo"`
	ID                   *string             `json:"id"`
}

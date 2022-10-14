package shared

type CorridorIn struct {
	FirstLastNameGeoFrom *FirstLastNameGeoIn `json:"firstLastNameGeoFrom,omitempty"`
	FirstLastNameGeoTo   *FirstLastNameGeoIn `json:"firstLastNameGeoTo,omitempty"`
	ID                   *string             `json:"id,omitempty"`
}

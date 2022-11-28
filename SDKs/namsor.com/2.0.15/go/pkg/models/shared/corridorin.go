package shared

// CorridorIn
// Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
type CorridorIn struct {
	FirstLastNameGeoFrom *FirstLastNameGeoIn `json:"firstLastNameGeoFrom,omitempty"`
	FirstLastNameGeoTo   *FirstLastNameGeoIn `json:"firstLastNameGeoTo,omitempty"`
	ID                   *string             `json:"id,omitempty"`
}

package shared

// GuestUnitType
// A specific type of unit primarily defined by its features.
type GuestUnitType struct {
	Codes    []string           `json:"codes,omitempty"`
	Features *GuestUnitFeatures `json:"features,omitempty"`
	Label    *string            `json:"label,omitempty"`
}

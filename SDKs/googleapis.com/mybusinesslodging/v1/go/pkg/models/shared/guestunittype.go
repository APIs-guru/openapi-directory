package shared

type GuestUnitType struct {
	Codes    []string           `json:"codes"`
	Features *GuestUnitFeatures `json:"features"`
	Label    *string            `json:"label"`
}

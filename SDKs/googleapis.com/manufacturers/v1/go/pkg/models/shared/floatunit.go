package shared

// FloatUnit
// Combination of float amount and unit.
type FloatUnit struct {
	Amount *float64 `json:"amount,omitempty"`
	Unit   *string  `json:"unit,omitempty"`
}

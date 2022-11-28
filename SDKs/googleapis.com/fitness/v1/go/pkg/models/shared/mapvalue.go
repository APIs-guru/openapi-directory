package shared

// MapValue
// Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.
type MapValue struct {
	FpVal *float64 `json:"fpVal,omitempty"`
}

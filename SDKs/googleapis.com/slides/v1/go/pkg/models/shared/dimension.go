package shared

type DimensionUnitEnum string

const (
	DimensionUnitEnumUnitUnspecified DimensionUnitEnum = "UNIT_UNSPECIFIED"
	DimensionUnitEnumEmu             DimensionUnitEnum = "EMU"
	DimensionUnitEnumPt              DimensionUnitEnum = "PT"
)

// Dimension
// A magnitude in a single direction in the specified units.
type Dimension struct {
	Magnitude *float64           `json:"magnitude,omitempty"`
	Unit      *DimensionUnitEnum `json:"unit,omitempty"`
}

package shared

type DimensionUnitEnum string

const (
	DimensionUnitEnumUnitUnspecified DimensionUnitEnum = "UNIT_UNSPECIFIED"
	DimensionUnitEnumPt              DimensionUnitEnum = "PT"
)

type Dimension struct {
	Magnitude *float64           `json:"magnitude"`
	Unit      *DimensionUnitEnum `json:"unit"`
}

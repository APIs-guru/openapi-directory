package shared




type DimensionUnitEnum string

const (
    DimensionUnitEnumUnitUnspecified DimensionUnitEnum = "UNIT_UNSPECIFIED"
DimensionUnitEnumEmu DimensionUnitEnum = "EMU"
DimensionUnitEnumPt DimensionUnitEnum = "PT"
)


type Dimension struct {
    Magnitude *float64 `json:"magnitude,omitempty"`
    Unit *DimensionUnitEnum `json:"unit,omitempty"`
    
}


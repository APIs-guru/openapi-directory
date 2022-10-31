package shared




type AffineTransformUnitEnum string

const (
    AffineTransformUnitEnumUnitUnspecified AffineTransformUnitEnum = "UNIT_UNSPECIFIED"
AffineTransformUnitEnumEmu AffineTransformUnitEnum = "EMU"
AffineTransformUnitEnumPt AffineTransformUnitEnum = "PT"
)


type AffineTransform struct {
    ScaleX *float64 `json:"scaleX,omitempty"`
    ScaleY *float64 `json:"scaleY,omitempty"`
    ShearX *float64 `json:"shearX,omitempty"`
    ShearY *float64 `json:"shearY,omitempty"`
    TranslateX *float64 `json:"translateX,omitempty"`
    TranslateY *float64 `json:"translateY,omitempty"`
    Unit *AffineTransformUnitEnum `json:"unit,omitempty"`
    
}


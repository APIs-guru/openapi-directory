package shared

type AffineTransformUnitEnum string

const (
	AffineTransformUnitEnumUnitUnspecified AffineTransformUnitEnum = "UNIT_UNSPECIFIED"
	AffineTransformUnitEnumEmu             AffineTransformUnitEnum = "EMU"
	AffineTransformUnitEnumPt              AffineTransformUnitEnum = "PT"
)

type AffineTransform struct {
	ScaleX     *float64                 `json:"scaleX"`
	ScaleY     *float64                 `json:"scaleY"`
	ShearX     *float64                 `json:"shearX"`
	ShearY     *float64                 `json:"shearY"`
	TranslateX *float64                 `json:"translateX"`
	TranslateY *float64                 `json:"translateY"`
	Unit       *AffineTransformUnitEnum `json:"unit"`
}

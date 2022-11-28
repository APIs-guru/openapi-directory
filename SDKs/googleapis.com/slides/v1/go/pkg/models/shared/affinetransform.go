package shared

type AffineTransformUnitEnum string

const (
	AffineTransformUnitEnumUnitUnspecified AffineTransformUnitEnum = "UNIT_UNSPECIFIED"
	AffineTransformUnitEnumEmu             AffineTransformUnitEnum = "EMU"
	AffineTransformUnitEnumPt              AffineTransformUnitEnum = "PT"
)

// AffineTransform
// AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
type AffineTransform struct {
	ScaleX     *float64                 `json:"scaleX,omitempty"`
	ScaleY     *float64                 `json:"scaleY,omitempty"`
	ShearX     *float64                 `json:"shearX,omitempty"`
	ShearY     *float64                 `json:"shearY,omitempty"`
	TranslateX *float64                 `json:"translateX,omitempty"`
	TranslateY *float64                 `json:"translateY,omitempty"`
	Unit       *AffineTransformUnitEnum `json:"unit,omitempty"`
}

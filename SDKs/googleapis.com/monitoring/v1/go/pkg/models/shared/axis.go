package shared

type AxisScaleEnum string

const (
	AxisScaleEnumScaleUnspecified AxisScaleEnum = "SCALE_UNSPECIFIED"
	AxisScaleEnumLinear           AxisScaleEnum = "LINEAR"
	AxisScaleEnumLog10            AxisScaleEnum = "LOG10"
)

// Axis
// A chart axis.
type Axis struct {
	Label *string        `json:"label,omitempty"`
	Scale *AxisScaleEnum `json:"scale,omitempty"`
}

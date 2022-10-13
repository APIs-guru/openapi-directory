package shared

type AxisScaleEnum string

const (
	AxisScaleEnumScaleUnspecified AxisScaleEnum = "SCALE_UNSPECIFIED"
	AxisScaleEnumLinear           AxisScaleEnum = "LINEAR"
	AxisScaleEnumLog10            AxisScaleEnum = "LOG10"
)

type Axis struct {
	Label *string        `json:"label"`
	Scale *AxisScaleEnum `json:"scale"`
}

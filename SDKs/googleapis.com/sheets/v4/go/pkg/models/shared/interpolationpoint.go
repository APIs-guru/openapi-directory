package shared

type InterpolationPointTypeEnum string

const (
	InterpolationPointTypeEnumInterpolationPointTypeUnspecified InterpolationPointTypeEnum = "INTERPOLATION_POINT_TYPE_UNSPECIFIED"
	InterpolationPointTypeEnumMin                               InterpolationPointTypeEnum = "MIN"
	InterpolationPointTypeEnumMax                               InterpolationPointTypeEnum = "MAX"
	InterpolationPointTypeEnumNumber                            InterpolationPointTypeEnum = "NUMBER"
	InterpolationPointTypeEnumPercent                           InterpolationPointTypeEnum = "PERCENT"
	InterpolationPointTypeEnumPercentile                        InterpolationPointTypeEnum = "PERCENTILE"
)

// InterpolationPoint
// A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
type InterpolationPoint struct {
	Color      *Color                      `json:"color,omitempty"`
	ColorStyle *ColorStyle                 `json:"colorStyle,omitempty"`
	Type       *InterpolationPointTypeEnum `json:"type,omitempty"`
	Value      *string                     `json:"value,omitempty"`
}

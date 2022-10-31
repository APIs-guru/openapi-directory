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

type InterpolationPoint struct {
	Color      *Color                      `json:"color,omitempty"`
	ColorStyle *ColorStyle                 `json:"colorStyle,omitempty"`
	Type       *InterpolationPointTypeEnum `json:"type,omitempty"`
	Value      *string                     `json:"value,omitempty"`
}

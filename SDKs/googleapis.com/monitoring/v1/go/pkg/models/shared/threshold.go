package shared

type ThresholdColorEnum string

const (
	ThresholdColorEnumColorUnspecified ThresholdColorEnum = "COLOR_UNSPECIFIED"
	ThresholdColorEnumYellow           ThresholdColorEnum = "YELLOW"
	ThresholdColorEnumRed              ThresholdColorEnum = "RED"
)

type ThresholdDirectionEnum string

const (
	ThresholdDirectionEnumDirectionUnspecified ThresholdDirectionEnum = "DIRECTION_UNSPECIFIED"
	ThresholdDirectionEnumAbove                ThresholdDirectionEnum = "ABOVE"
	ThresholdDirectionEnumBelow                ThresholdDirectionEnum = "BELOW"
)

type ThresholdTargetAxisEnum string

const (
	ThresholdTargetAxisEnumTargetAxisUnspecified ThresholdTargetAxisEnum = "TARGET_AXIS_UNSPECIFIED"
	ThresholdTargetAxisEnumY1                    ThresholdTargetAxisEnum = "Y1"
	ThresholdTargetAxisEnumY2                    ThresholdTargetAxisEnum = "Y2"
)

type Threshold struct {
	Color      *ThresholdColorEnum      `json:"color,omitempty"`
	Direction  *ThresholdDirectionEnum  `json:"direction,omitempty"`
	Label      *string                  `json:"label,omitempty"`
	TargetAxis *ThresholdTargetAxisEnum `json:"targetAxis,omitempty"`
	Value      *float64                 `json:"value,omitempty"`
}

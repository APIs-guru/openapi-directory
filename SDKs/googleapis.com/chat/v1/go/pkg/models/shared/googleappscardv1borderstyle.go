package shared

type GoogleAppsCardV1BorderStyleTypeEnum string

const (
	GoogleAppsCardV1BorderStyleTypeEnumBorderTypeUnspecified GoogleAppsCardV1BorderStyleTypeEnum = "BORDER_TYPE_UNSPECIFIED"
	GoogleAppsCardV1BorderStyleTypeEnumNoBorder              GoogleAppsCardV1BorderStyleTypeEnum = "NO_BORDER"
	GoogleAppsCardV1BorderStyleTypeEnumStroke                GoogleAppsCardV1BorderStyleTypeEnum = "STROKE"
)

// GoogleAppsCardV1BorderStyle
// Represents the complete border style applied to items in a widget.
type GoogleAppsCardV1BorderStyle struct {
	CornerRadius *int32                               `json:"cornerRadius,omitempty"`
	StrokeColor  *Color                               `json:"strokeColor,omitempty"`
	Type         *GoogleAppsCardV1BorderStyleTypeEnum `json:"type,omitempty"`
}

package shared

type GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum string

const (
	GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumDateFormatUnspecified GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = "DATE_FORMAT_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumLongDate              GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = "LONG_DATE"
	GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumShortDate             GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = "SHORT_DATE"
)

// GoogleAppsDriveLabelsV2betaFieldDateOptions
// Options for the date field type.
type GoogleAppsDriveLabelsV2betaFieldDateOptions struct {
	DateFormat     *string                                                        `json:"dateFormat,omitempty"`
	DateFormatType *GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum `json:"dateFormatType,omitempty"`
	MaxValue       *GoogleTypeDate                                                `json:"maxValue,omitempty"`
	MinValue       *GoogleTypeDate                                                `json:"minValue,omitempty"`
}

// GoogleAppsDriveLabelsV2betaFieldDateOptionsInput
// Options for the date field type.
type GoogleAppsDriveLabelsV2betaFieldDateOptionsInput struct {
	DateFormatType *GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum `json:"dateFormatType,omitempty"`
	MaxValue       *GoogleTypeDate                                                `json:"maxValue,omitempty"`
	MinValue       *GoogleTypeDate                                                `json:"minValue,omitempty"`
}

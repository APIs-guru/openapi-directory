package shared

type GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum string

const (
	GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumDateFormatUnspecified GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = "DATE_FORMAT_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumLongDate              GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = "LONG_DATE"
	GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumShortDate             GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum = "SHORT_DATE"
)

type GoogleAppsDriveLabelsV2betaFieldDateOptions struct {
	DateFormat     *string                                                        `json:"dateFormat"`
	DateFormatType *GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum `json:"dateFormatType"`
	MaxValue       *GoogleTypeDate                                                `json:"maxValue"`
	MinValue       *GoogleTypeDate                                                `json:"minValue"`
}

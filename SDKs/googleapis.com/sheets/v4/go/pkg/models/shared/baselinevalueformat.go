package shared

type BaselineValueFormatComparisonTypeEnum string

const (
	BaselineValueFormatComparisonTypeEnumComparisonTypeUndefined BaselineValueFormatComparisonTypeEnum = "COMPARISON_TYPE_UNDEFINED"
	BaselineValueFormatComparisonTypeEnumAbsoluteDifference      BaselineValueFormatComparisonTypeEnum = "ABSOLUTE_DIFFERENCE"
	BaselineValueFormatComparisonTypeEnumPercentageDifference    BaselineValueFormatComparisonTypeEnum = "PERCENTAGE_DIFFERENCE"
)

// BaselineValueFormat
// Formatting options for baseline value.
type BaselineValueFormat struct {
	ComparisonType     *BaselineValueFormatComparisonTypeEnum `json:"comparisonType,omitempty"`
	Description        *string                                `json:"description,omitempty"`
	NegativeColor      *Color                                 `json:"negativeColor,omitempty"`
	NegativeColorStyle *ColorStyle                            `json:"negativeColorStyle,omitempty"`
	Position           *TextPosition                          `json:"position,omitempty"`
	PositiveColor      *Color                                 `json:"positiveColor,omitempty"`
	PositiveColorStyle *ColorStyle                            `json:"positiveColorStyle,omitempty"`
	TextFormat         *TextFormat                            `json:"textFormat,omitempty"`
}

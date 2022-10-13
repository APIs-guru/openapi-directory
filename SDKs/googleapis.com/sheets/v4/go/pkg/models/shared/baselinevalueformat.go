package shared

type BaselineValueFormatComparisonTypeEnum string

const (
	BaselineValueFormatComparisonTypeEnumComparisonTypeUndefined BaselineValueFormatComparisonTypeEnum = "COMPARISON_TYPE_UNDEFINED"
	BaselineValueFormatComparisonTypeEnumAbsoluteDifference      BaselineValueFormatComparisonTypeEnum = "ABSOLUTE_DIFFERENCE"
	BaselineValueFormatComparisonTypeEnumPercentageDifference    BaselineValueFormatComparisonTypeEnum = "PERCENTAGE_DIFFERENCE"
)

type BaselineValueFormat struct {
	ComparisonType     *BaselineValueFormatComparisonTypeEnum `json:"comparisonType"`
	Description        *string                                `json:"description"`
	NegativeColor      *Color                                 `json:"negativeColor"`
	NegativeColorStyle *ColorStyle                            `json:"negativeColorStyle"`
	Position           *TextPosition                          `json:"position"`
	PositiveColor      *Color                                 `json:"positiveColor"`
	PositiveColorStyle *ColorStyle                            `json:"positiveColorStyle"`
	TextFormat         *TextFormat                            `json:"textFormat"`
}

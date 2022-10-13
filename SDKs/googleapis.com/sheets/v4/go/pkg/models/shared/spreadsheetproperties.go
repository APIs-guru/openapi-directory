package shared

type SpreadsheetPropertiesAutoRecalcEnum string

const (
	SpreadsheetPropertiesAutoRecalcEnumRecalculationIntervalUnspecified SpreadsheetPropertiesAutoRecalcEnum = "RECALCULATION_INTERVAL_UNSPECIFIED"
	SpreadsheetPropertiesAutoRecalcEnumOnChange                         SpreadsheetPropertiesAutoRecalcEnum = "ON_CHANGE"
	SpreadsheetPropertiesAutoRecalcEnumMinute                           SpreadsheetPropertiesAutoRecalcEnum = "MINUTE"
	SpreadsheetPropertiesAutoRecalcEnumHour                             SpreadsheetPropertiesAutoRecalcEnum = "HOUR"
)

type SpreadsheetProperties struct {
	AutoRecalc                   *SpreadsheetPropertiesAutoRecalcEnum `json:"autoRecalc"`
	DefaultFormat                *CellFormat                          `json:"defaultFormat"`
	IterativeCalculationSettings *IterativeCalculationSettings        `json:"iterativeCalculationSettings"`
	Locale                       *string                              `json:"locale"`
	SpreadsheetTheme             *SpreadsheetTheme                    `json:"spreadsheetTheme"`
	TimeZone                     *string                              `json:"timeZone"`
	Title                        *string                              `json:"title"`
}

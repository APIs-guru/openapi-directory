package shared

type SpreadsheetPropertiesAutoRecalcEnum string

const (
	SpreadsheetPropertiesAutoRecalcEnumRecalculationIntervalUnspecified SpreadsheetPropertiesAutoRecalcEnum = "RECALCULATION_INTERVAL_UNSPECIFIED"
	SpreadsheetPropertiesAutoRecalcEnumOnChange                         SpreadsheetPropertiesAutoRecalcEnum = "ON_CHANGE"
	SpreadsheetPropertiesAutoRecalcEnumMinute                           SpreadsheetPropertiesAutoRecalcEnum = "MINUTE"
	SpreadsheetPropertiesAutoRecalcEnumHour                             SpreadsheetPropertiesAutoRecalcEnum = "HOUR"
)

// SpreadsheetProperties
// Properties of a spreadsheet.
type SpreadsheetProperties struct {
	AutoRecalc                   *SpreadsheetPropertiesAutoRecalcEnum `json:"autoRecalc,omitempty"`
	DefaultFormat                *CellFormat                          `json:"defaultFormat,omitempty"`
	IterativeCalculationSettings *IterativeCalculationSettings        `json:"iterativeCalculationSettings,omitempty"`
	Locale                       *string                              `json:"locale,omitempty"`
	SpreadsheetTheme             *SpreadsheetTheme                    `json:"spreadsheetTheme,omitempty"`
	TimeZone                     *string                              `json:"timeZone,omitempty"`
	Title                        *string                              `json:"title,omitempty"`
}

package shared

type GamesNumberFormatConfigurationNumberFormatTypeEnum string

const (
	GamesNumberFormatConfigurationNumberFormatTypeEnumNumberFormatTypeUnspecified GamesNumberFormatConfigurationNumberFormatTypeEnum = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
	GamesNumberFormatConfigurationNumberFormatTypeEnumNumeric                     GamesNumberFormatConfigurationNumberFormatTypeEnum = "NUMERIC"
	GamesNumberFormatConfigurationNumberFormatTypeEnumTimeDuration                GamesNumberFormatConfigurationNumberFormatTypeEnum = "TIME_DURATION"
	GamesNumberFormatConfigurationNumberFormatTypeEnumCurrency                    GamesNumberFormatConfigurationNumberFormatTypeEnum = "CURRENCY"
)

// GamesNumberFormatConfiguration
// A number format resource.
type GamesNumberFormatConfiguration struct {
	CurrencyCode     *string                                             `json:"currencyCode,omitempty"`
	NumDecimalPlaces *int32                                              `json:"numDecimalPlaces,omitempty"`
	NumberFormatType *GamesNumberFormatConfigurationNumberFormatTypeEnum `json:"numberFormatType,omitempty"`
	Suffix           *GamesNumberAffixConfiguration                      `json:"suffix,omitempty"`
}

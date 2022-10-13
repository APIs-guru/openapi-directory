package shared

type GamesNumberFormatConfigurationNumberFormatTypeEnum string

const (
	GamesNumberFormatConfigurationNumberFormatTypeEnumNumberFormatTypeUnspecified GamesNumberFormatConfigurationNumberFormatTypeEnum = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
	GamesNumberFormatConfigurationNumberFormatTypeEnumNumeric                     GamesNumberFormatConfigurationNumberFormatTypeEnum = "NUMERIC"
	GamesNumberFormatConfigurationNumberFormatTypeEnumTimeDuration                GamesNumberFormatConfigurationNumberFormatTypeEnum = "TIME_DURATION"
	GamesNumberFormatConfigurationNumberFormatTypeEnumCurrency                    GamesNumberFormatConfigurationNumberFormatTypeEnum = "CURRENCY"
)

type GamesNumberFormatConfiguration struct {
	CurrencyCode     *string                                             `json:"currencyCode"`
	NumDecimalPlaces *int32                                              `json:"numDecimalPlaces"`
	NumberFormatType *GamesNumberFormatConfigurationNumberFormatTypeEnum `json:"numberFormatType"`
	Suffix           *GamesNumberAffixConfiguration                      `json:"suffix"`
}

package shared

type LineItemFlightFlightDateTypeEnum string

const (
	LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeUnspecified LineItemFlightFlightDateTypeEnum = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED"
	LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeInherited   LineItemFlightFlightDateTypeEnum = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED"
	LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeCustom      LineItemFlightFlightDateTypeEnum = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"
)

// LineItemFlight
// Settings that control the active duration of a line item.
type LineItemFlight struct {
	DateRange      *DateRange                        `json:"dateRange,omitempty"`
	FlightDateType *LineItemFlightFlightDateTypeEnum `json:"flightDateType,omitempty"`
}

package shared

// AdditionalInformationStructured
// Is used if and only if the bookingStatus entry equals "information".
// Every active standing order related to the dedicated payment account result into one entry.
type AdditionalInformationStructured struct {
	StandingOrderDetails StandingOrderDetails `json:"standingOrderDetails"`
}

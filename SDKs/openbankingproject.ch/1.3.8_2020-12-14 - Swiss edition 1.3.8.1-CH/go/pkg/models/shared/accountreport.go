package shared

// AccountReport
// JSON based account report.
// This account report contains transactions resulting from the query parameters.
//
// 'booked' shall be contained if bookingStatus parameter is set to "booked" or "both".
//
// 'pending' is not contained if the bookingStatus parameter is set to "booked" or "information".
//
// 'information' Only contained if the bookingStatus is set to "information" and if supported by ASPSP.
type AccountReport struct {
	Links       map[string]HrefType `json:"_links"`
	Booked      []Transactions      `json:"booked,omitempty"`
	Information []Transactions      `json:"information,omitempty"`
	Pending     []Transactions      `json:"pending,omitempty"`
}

package shared

type AccountReport struct {
	Links       map[string]HrefType `json:"_links"`
	Booked      []Transactions      `json:"booked,omitempty"`
	Information []Transactions      `json:"information,omitempty"`
	Pending     []Transactions      `json:"pending,omitempty"`
}

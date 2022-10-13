package shared

type AccountReport struct {
	Links       map[string]HrefType `json:"_links"`
	Booked      []Transactions      `json:"booked"`
	Information []Transactions      `json:"information"`
	Pending     []Transactions      `json:"pending"`
}

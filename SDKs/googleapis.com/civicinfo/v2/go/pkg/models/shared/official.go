package shared

// Official
// Information about a person holding an elected office.
type Official struct {
	Address            []SimpleAddressType `json:"address,omitempty"`
	Channels           []Channel           `json:"channels,omitempty"`
	Emails             []string            `json:"emails,omitempty"`
	GeocodingSummaries []GeocodingSummary  `json:"geocodingSummaries,omitempty"`
	Name               *string             `json:"name,omitempty"`
	Party              *string             `json:"party,omitempty"`
	Phones             []string            `json:"phones,omitempty"`
	PhotoURL           *string             `json:"photoUrl,omitempty"`
	Urls               []string            `json:"urls,omitempty"`
}

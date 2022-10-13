package shared

type Official struct {
	Address            []SimpleAddressType `json:"address"`
	Channels           []Channel           `json:"channels"`
	Emails             []string            `json:"emails"`
	GeocodingSummaries []GeocodingSummary  `json:"geocodingSummaries"`
	Name               *string             `json:"name"`
	Party              *string             `json:"party"`
	Phones             []string            `json:"phones"`
	PhotoURL           *string             `json:"photoUrl"`
	Urls               []string            `json:"urls"`
}

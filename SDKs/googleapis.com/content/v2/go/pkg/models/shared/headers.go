package shared

type Headers struct {
	Locations            []LocationIDSet `json:"locations"`
	NumberOfItems        []string        `json:"numberOfItems"`
	PostalCodeGroupNames []string        `json:"postalCodeGroupNames"`
	Prices               []Price         `json:"prices"`
	Weights              []Weight        `json:"weights"`
}

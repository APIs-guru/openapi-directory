package shared

type TransitTable struct {
	PostalCodeGroupNames []string                     `json:"postalCodeGroupNames"`
	Rows                 []TransitTableTransitTimeRow `json:"rows"`
	TransitTimeLabels    []string                     `json:"transitTimeLabels"`
}

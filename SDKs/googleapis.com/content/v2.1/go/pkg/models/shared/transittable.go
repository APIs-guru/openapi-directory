package shared

type TransitTable struct {
	PostalCodeGroupNames []string                     `json:"postalCodeGroupNames,omitempty"`
	Rows                 []TransitTableTransitTimeRow `json:"rows,omitempty"`
	TransitTimeLabels    []string                     `json:"transitTimeLabels,omitempty"`
}

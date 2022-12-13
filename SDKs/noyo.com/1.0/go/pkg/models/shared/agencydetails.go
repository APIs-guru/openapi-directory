package shared

type AgencyDetails struct {
	Certified              *bool   `json:"certified,omitempty"`
	FranchiseCode          *string `json:"franchise_code,omitempty"`
	Name                   *string `json:"name,omitempty"`
	NationalProducerNumber *string `json:"national_producer_number,omitempty"`
	TaxIDNumber            *string `json:"tax_id_number,omitempty"`
}

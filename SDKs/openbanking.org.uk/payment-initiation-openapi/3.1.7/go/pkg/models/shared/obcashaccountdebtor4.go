package shared

// ObCashAccountDebtor4
// ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.
type ObCashAccountDebtor4 struct {
	Identification          *string `json:"Identification,omitempty"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              *string `json:"SchemeName,omitempty"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

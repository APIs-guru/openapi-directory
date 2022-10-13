package shared

type CreditorAgent7Ch struct {
	Address *PostalAddress6Ch             `json:"address"`
	Bic     *string                       `json:"bic"`
	Iid     *InstitutionalIdentification2 `json:"iid"`
	Name    *string                       `json:"name"`
}

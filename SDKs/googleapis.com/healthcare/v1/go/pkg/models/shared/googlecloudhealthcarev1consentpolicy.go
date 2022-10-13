package shared

type GoogleCloudHealthcareV1ConsentPolicy struct {
	AuthorizationRule  *Expr       `json:"authorizationRule"`
	ResourceAttributes []Attribute `json:"resourceAttributes"`
}

package shared

type GoogleCloudHealthcareV1beta1ConsentPolicy struct {
	AuthorizationRule  *Expr       `json:"authorizationRule"`
	ResourceAttributes []Attribute `json:"resourceAttributes"`
}

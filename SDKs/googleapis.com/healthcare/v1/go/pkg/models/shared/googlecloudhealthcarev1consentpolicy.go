package shared

// GoogleCloudHealthcareV1ConsentPolicy
// Represents a user's consent in terms of the resources that can be accessed and under what conditions.
type GoogleCloudHealthcareV1ConsentPolicy struct {
	AuthorizationRule  *Expr       `json:"authorizationRule,omitempty"`
	ResourceAttributes []Attribute `json:"resourceAttributes,omitempty"`
}

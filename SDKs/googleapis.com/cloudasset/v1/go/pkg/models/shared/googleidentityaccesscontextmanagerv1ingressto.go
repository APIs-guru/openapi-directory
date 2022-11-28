package shared

// GoogleIdentityAccesscontextmanagerV1IngressTo
// Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
type GoogleIdentityAccesscontextmanagerV1IngressTo struct {
	Operations []GoogleIdentityAccesscontextmanagerV1APIOperation `json:"operations,omitempty"`
	Resources  []string                                           `json:"resources,omitempty"`
}

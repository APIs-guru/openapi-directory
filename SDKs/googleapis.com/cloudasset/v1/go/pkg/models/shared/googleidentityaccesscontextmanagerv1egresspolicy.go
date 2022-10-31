package shared

type GoogleIdentityAccesscontextmanagerV1EgressPolicy struct {
	EgressFrom *GoogleIdentityAccesscontextmanagerV1EgressFrom `json:"egressFrom,omitempty"`
	EgressTo   *GoogleIdentityAccesscontextmanagerV1EgressTo   `json:"egressTo,omitempty"`
}

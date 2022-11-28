package shared

// GoogleIdentityAccesscontextmanagerV1CustomLevel
// `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
type GoogleIdentityAccesscontextmanagerV1CustomLevel struct {
	Expr *Expr `json:"expr,omitempty"`
}

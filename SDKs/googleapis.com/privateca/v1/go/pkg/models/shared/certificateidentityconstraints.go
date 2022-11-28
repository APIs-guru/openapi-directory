package shared

// CertificateIdentityConstraints
// Describes constraints on a Certificate's Subject and SubjectAltNames.
type CertificateIdentityConstraints struct {
	AllowSubjectAltNamesPassthrough *bool `json:"allowSubjectAltNamesPassthrough,omitempty"`
	AllowSubjectPassthrough         *bool `json:"allowSubjectPassthrough,omitempty"`
	CelExpression                   *Expr `json:"celExpression,omitempty"`
}

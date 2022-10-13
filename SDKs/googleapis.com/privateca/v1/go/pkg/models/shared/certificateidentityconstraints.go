package shared

type CertificateIdentityConstraints struct {
	AllowSubjectAltNamesPassthrough *bool `json:"allowSubjectAltNamesPassthrough"`
	AllowSubjectPassthrough         *bool `json:"allowSubjectPassthrough"`
	CelExpression                   *Expr `json:"celExpression"`
}

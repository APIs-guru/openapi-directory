package shared



type CertificateIdentityConstraints struct {
    AllowSubjectAltNamesPassthrough *bool `json:"allowSubjectAltNamesPassthrough,omitempty"`
    AllowSubjectPassthrough *bool `json:"allowSubjectPassthrough,omitempty"`
    CelExpression *Expr `json:"celExpression,omitempty"`
    
}


package shared

type AllowedKeyType struct {
	EllipticCurve *EcKeyType  `json:"ellipticCurve,omitempty"`
	Rsa           *RsaKeyType `json:"rsa,omitempty"`
}

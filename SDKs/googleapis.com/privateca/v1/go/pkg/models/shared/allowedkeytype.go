package shared

type AllowedKeyType struct {
	EllipticCurve *EcKeyType  `json:"ellipticCurve"`
	Rsa           *RsaKeyType `json:"rsa"`
}

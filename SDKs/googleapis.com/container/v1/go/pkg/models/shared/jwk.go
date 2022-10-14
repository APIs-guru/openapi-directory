package shared

type Jwk struct {
	Alg *string `json:"alg,omitempty"`
	Crv *string `json:"crv,omitempty"`
	E   *string `json:"e,omitempty"`
	Kid *string `json:"kid,omitempty"`
	Kty *string `json:"kty,omitempty"`
	N   *string `json:"n,omitempty"`
	Use *string `json:"use,omitempty"`
	X   *string `json:"x,omitempty"`
	Y   *string `json:"y,omitempty"`
}

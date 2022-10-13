package shared

type Jwk struct {
	Alg *string `json:"alg"`
	Crv *string `json:"crv"`
	E   *string `json:"e"`
	Kid *string `json:"kid"`
	Kty *string `json:"kty"`
	N   *string `json:"n"`
	Use *string `json:"use"`
	X   *string `json:"x"`
	Y   *string `json:"y"`
}

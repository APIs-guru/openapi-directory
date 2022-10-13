package shared

type Oauth2JwtBearer struct {
	ClientKey *Secret    `json:"clientKey"`
	JwtClaims *JwtClaims `json:"jwtClaims"`
}

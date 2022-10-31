package shared



type Oauth2JwtBearer struct {
    ClientKey *Secret `json:"clientKey,omitempty"`
    JwtClaims *JwtClaims `json:"jwtClaims,omitempty"`
    
}


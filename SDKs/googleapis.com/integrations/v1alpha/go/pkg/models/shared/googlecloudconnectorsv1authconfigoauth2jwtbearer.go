package shared

// GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer
// Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
type GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer struct {
	ClientKey *GoogleCloudConnectorsV1Secret                             `json:"clientKey,omitempty"`
	JwtClaims *GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims `json:"jwtClaims,omitempty"`
}

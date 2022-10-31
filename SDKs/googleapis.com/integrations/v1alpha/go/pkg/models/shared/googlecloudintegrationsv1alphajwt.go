package shared

type GoogleCloudIntegrationsV1alphaJwt struct {
	Jwt        *string `json:"jwt,omitempty"`
	JwtHeader  *string `json:"jwtHeader,omitempty"`
	JwtPayload *string `json:"jwtPayload,omitempty"`
	Secret     *string `json:"secret,omitempty"`
}

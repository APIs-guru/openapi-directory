package shared

type GoogleCloudIntegrationsV1alphaJwt struct {
	Jwt        *string `json:"jwt"`
	JwtHeader  *string `json:"jwtHeader"`
	JwtPayload *string `json:"jwtPayload"`
	Secret     *string `json:"secret"`
}

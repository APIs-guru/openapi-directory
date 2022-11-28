package shared

// GoogleCloudIntegrationsV1alphaJwt
// Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.
type GoogleCloudIntegrationsV1alphaJwt struct {
	Jwt        *string `json:"jwt,omitempty"`
	JwtHeader  *string `json:"jwtHeader,omitempty"`
	JwtPayload *string `json:"jwtPayload,omitempty"`
	Secret     *string `json:"secret,omitempty"`
}

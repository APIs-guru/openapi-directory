package shared

type GoogleCloudIntegrationsV1alphaOidcToken struct {
	Audience            *string `json:"audience,omitempty"`
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
	Token               *string `json:"token,omitempty"`
	TokenExpireTime     *string `json:"tokenExpireTime,omitempty"`
}

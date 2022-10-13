package shared

type GoogleCloudIntegrationsV1alphaOidcToken struct {
	Audience            *string `json:"audience"`
	ServiceAccountEmail *string `json:"serviceAccountEmail"`
	Token               *string `json:"token"`
	TokenExpireTime     *string `json:"tokenExpireTime"`
}

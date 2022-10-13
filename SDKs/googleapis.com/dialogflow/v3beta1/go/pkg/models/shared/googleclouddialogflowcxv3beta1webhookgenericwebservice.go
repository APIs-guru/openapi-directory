package shared

type GoogleCloudDialogflowCxV3beta1WebhookGenericWebService struct {
	AllowedCaCerts []string          `json:"allowedCaCerts"`
	Password       *string           `json:"password"`
	RequestHeaders map[string]string `json:"requestHeaders"`
	URI            *string           `json:"uri"`
	Username       *string           `json:"username"`
}

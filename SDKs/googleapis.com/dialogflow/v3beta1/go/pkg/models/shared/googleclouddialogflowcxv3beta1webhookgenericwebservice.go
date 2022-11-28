package shared

// GoogleCloudDialogflowCxV3beta1WebhookGenericWebService
// Represents configuration for a generic web service.
type GoogleCloudDialogflowCxV3beta1WebhookGenericWebService struct {
	AllowedCaCerts []string          `json:"allowedCaCerts,omitempty"`
	Password       *string           `json:"password,omitempty"`
	RequestHeaders map[string]string `json:"requestHeaders,omitempty"`
	URI            *string           `json:"uri,omitempty"`
	Username       *string           `json:"username,omitempty"`
}

package shared

// GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig
// Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
type GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig struct {
	GenericWebService *GoogleCloudDialogflowCxV3beta1WebhookGenericWebService `json:"genericWebService,omitempty"`
	Service           *string                                                 `json:"service,omitempty"`
}

package shared

// GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig
// Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
type GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig struct {
	GenericWebService *GoogleCloudDialogflowCxV3WebhookGenericWebService `json:"genericWebService,omitempty"`
	Service           *string                                            `json:"service,omitempty"`
}

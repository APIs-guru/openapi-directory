package shared

type GoogleCloudDialogflowCxV3beta1Webhook struct {
	Disabled          *bool                                                        `json:"disabled,omitempty"`
	DisplayName       *string                                                      `json:"displayName,omitempty"`
	GenericWebService *GoogleCloudDialogflowCxV3beta1WebhookGenericWebService      `json:"genericWebService,omitempty"`
	Name              *string                                                      `json:"name,omitempty"`
	ServiceDirectory  *GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig `json:"serviceDirectory,omitempty"`
	Timeout           *string                                                      `json:"timeout,omitempty"`
}

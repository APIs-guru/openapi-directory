package shared

type GoogleCloudDialogflowCxV3beta1Webhook struct {
	Disabled          *bool                                                        `json:"disabled"`
	DisplayName       *string                                                      `json:"displayName"`
	GenericWebService *GoogleCloudDialogflowCxV3beta1WebhookGenericWebService      `json:"genericWebService"`
	Name              *string                                                      `json:"name"`
	ServiceDirectory  *GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig `json:"serviceDirectory"`
	Timeout           *string                                                      `json:"timeout"`
}

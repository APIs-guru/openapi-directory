package shared

type GoogleCloudDialogflowCxV3Webhook struct {
	Disabled          *bool                                                   `json:"disabled"`
	DisplayName       *string                                                 `json:"displayName"`
	GenericWebService *GoogleCloudDialogflowCxV3WebhookGenericWebService      `json:"genericWebService"`
	Name              *string                                                 `json:"name"`
	ServiceDirectory  *GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig `json:"serviceDirectory"`
	Timeout           *string                                                 `json:"timeout"`
}

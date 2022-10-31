package shared

type GoogleCloudDialogflowCxV3Webhook struct {
	Disabled          *bool                                                   `json:"disabled,omitempty"`
	DisplayName       *string                                                 `json:"displayName,omitempty"`
	GenericWebService *GoogleCloudDialogflowCxV3WebhookGenericWebService      `json:"genericWebService,omitempty"`
	Name              *string                                                 `json:"name,omitempty"`
	ServiceDirectory  *GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig `json:"serviceDirectory,omitempty"`
	Timeout           *string                                                 `json:"timeout,omitempty"`
}

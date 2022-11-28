package shared

// GoogleCloudDialogflowCxV3Webhook
// Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
type GoogleCloudDialogflowCxV3Webhook struct {
	Disabled          *bool                                                   `json:"disabled,omitempty"`
	DisplayName       *string                                                 `json:"displayName,omitempty"`
	GenericWebService *GoogleCloudDialogflowCxV3WebhookGenericWebService      `json:"genericWebService,omitempty"`
	Name              *string                                                 `json:"name,omitempty"`
	ServiceDirectory  *GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig `json:"serviceDirectory,omitempty"`
	Timeout           *string                                                 `json:"timeout,omitempty"`
}

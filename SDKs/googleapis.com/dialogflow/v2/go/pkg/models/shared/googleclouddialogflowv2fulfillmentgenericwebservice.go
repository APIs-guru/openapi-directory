package shared

// GoogleCloudDialogflowV2FulfillmentGenericWebService
// Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
type GoogleCloudDialogflowV2FulfillmentGenericWebService struct {
	IsCloudFunction *bool             `json:"isCloudFunction,omitempty"`
	Password        *string           `json:"password,omitempty"`
	RequestHeaders  map[string]string `json:"requestHeaders,omitempty"`
	URI             *string           `json:"uri,omitempty"`
	Username        *string           `json:"username,omitempty"`
}

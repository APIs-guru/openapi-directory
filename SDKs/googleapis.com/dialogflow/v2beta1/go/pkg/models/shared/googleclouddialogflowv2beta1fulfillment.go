package shared

// GoogleCloudDialogflowV2beta1Fulfillment
// By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
type GoogleCloudDialogflowV2beta1Fulfillment struct {
	DisplayName       *string                                                   `json:"displayName,omitempty"`
	Enabled           *bool                                                     `json:"enabled,omitempty"`
	Features          []GoogleCloudDialogflowV2beta1FulfillmentFeature          `json:"features,omitempty"`
	GenericWebService *GoogleCloudDialogflowV2beta1FulfillmentGenericWebService `json:"genericWebService,omitempty"`
	Name              *string                                                   `json:"name,omitempty"`
}

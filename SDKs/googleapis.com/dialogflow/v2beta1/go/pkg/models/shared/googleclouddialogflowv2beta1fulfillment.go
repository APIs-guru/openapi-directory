package shared

type GoogleCloudDialogflowV2beta1Fulfillment struct {
	DisplayName       *string                                                   `json:"displayName,omitempty"`
	Enabled           *bool                                                     `json:"enabled,omitempty"`
	Features          []GoogleCloudDialogflowV2beta1FulfillmentFeature          `json:"features,omitempty"`
	GenericWebService *GoogleCloudDialogflowV2beta1FulfillmentGenericWebService `json:"genericWebService,omitempty"`
	Name              *string                                                   `json:"name,omitempty"`
}

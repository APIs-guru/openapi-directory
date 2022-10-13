package shared

type GoogleCloudDialogflowV2beta1Fulfillment struct {
	DisplayName       *string                                                   `json:"displayName"`
	Enabled           *bool                                                     `json:"enabled"`
	Features          []GoogleCloudDialogflowV2beta1FulfillmentFeature          `json:"features"`
	GenericWebService *GoogleCloudDialogflowV2beta1FulfillmentGenericWebService `json:"genericWebService"`
	Name              *string                                                   `json:"name"`
}

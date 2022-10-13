package shared

type GoogleCloudDialogflowV2Fulfillment struct {
	DisplayName       *string                                              `json:"displayName"`
	Enabled           *bool                                                `json:"enabled"`
	Features          []GoogleCloudDialogflowV2FulfillmentFeature          `json:"features"`
	GenericWebService *GoogleCloudDialogflowV2FulfillmentGenericWebService `json:"genericWebService"`
	Name              *string                                              `json:"name"`
}

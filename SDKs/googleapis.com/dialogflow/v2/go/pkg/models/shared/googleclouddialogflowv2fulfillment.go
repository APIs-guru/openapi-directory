package shared



type GoogleCloudDialogflowV2Fulfillment struct {
    DisplayName *string `json:"displayName,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Features []GoogleCloudDialogflowV2FulfillmentFeature `json:"features,omitempty"`
    GenericWebService *GoogleCloudDialogflowV2FulfillmentGenericWebService `json:"genericWebService,omitempty"`
    Name *string `json:"name,omitempty"`
    
}


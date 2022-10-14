package shared

type GoogleCloudDialogflowV2FulfillmentGenericWebService struct {
	IsCloudFunction *bool             `json:"isCloudFunction,omitempty"`
	Password        *string           `json:"password,omitempty"`
	RequestHeaders  map[string]string `json:"requestHeaders,omitempty"`
	URI             *string           `json:"uri,omitempty"`
	Username        *string           `json:"username,omitempty"`
}

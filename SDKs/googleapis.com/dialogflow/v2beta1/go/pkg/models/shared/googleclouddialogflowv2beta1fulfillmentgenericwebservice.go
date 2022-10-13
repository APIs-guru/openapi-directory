package shared

type GoogleCloudDialogflowV2beta1FulfillmentGenericWebService struct {
	IsCloudFunction *bool             `json:"isCloudFunction"`
	Password        *string           `json:"password"`
	RequestHeaders  map[string]string `json:"requestHeaders"`
	URI             *string           `json:"uri"`
	Username        *string           `json:"username"`
}

package shared

// GoogleCloudDialogflowV2beta1CreateMessageRequestInput
// The request message to create one Message. Currently it is only used in BatchCreateMessagesRequest.
type GoogleCloudDialogflowV2beta1CreateMessageRequestInput struct {
	Message *GoogleCloudDialogflowV2beta1MessageInput `json:"message,omitempty"`
	Parent  *string                                   `json:"parent,omitempty"`
}

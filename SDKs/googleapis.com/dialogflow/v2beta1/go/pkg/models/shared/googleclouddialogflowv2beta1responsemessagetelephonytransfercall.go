package shared

// GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall
// Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
type GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall struct {
	PhoneNumber *string `json:"phoneNumber,omitempty"`
	SipURI      *string `json:"sipUri,omitempty"`
}

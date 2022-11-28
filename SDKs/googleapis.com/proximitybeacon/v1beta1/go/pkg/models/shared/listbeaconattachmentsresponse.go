package shared

// ListBeaconAttachmentsResponse
// Response to `ListBeaconAttachments` that contains the requested attachments.
type ListBeaconAttachmentsResponse struct {
	Attachments []BeaconAttachment `json:"attachments,omitempty"`
}

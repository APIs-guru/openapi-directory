package shared

type MessagePartBody struct {
	AttachmentID *string `json:"attachmentId"`
	Data         *string `json:"data"`
	Size         *int32  `json:"size"`
}

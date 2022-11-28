package shared

// Attachment
// Represents a file attached to a support case.
type Attachment struct {
	CreateTime *string `json:"createTime,omitempty"`
	Creator    *Actor  `json:"creator,omitempty"`
	Filename   *string `json:"filename,omitempty"`
	MimeType   *string `json:"mimeType,omitempty"`
	Name       *string `json:"name,omitempty"`
	SizeBytes  *string `json:"sizeBytes,omitempty"`
}

// AttachmentInput
// Represents a file attached to a support case.
type AttachmentInput struct {
	Creator  *ActorInput `json:"creator,omitempty"`
	Filename *string     `json:"filename,omitempty"`
}

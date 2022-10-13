package shared

type MessagePart struct {
	Body     *MessagePartBody    `json:"body"`
	Filename *string             `json:"filename"`
	Headers  []MessagePartHeader `json:"headers"`
	MimeType *string             `json:"mimeType"`
	PartID   *string             `json:"partId"`
	Parts    []MessagePart       `json:"parts"`
}

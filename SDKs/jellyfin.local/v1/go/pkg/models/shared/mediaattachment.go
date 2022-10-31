package shared

type MediaAttachment struct {
	Codec       *string `json:"Codec,omitempty"`
	CodecTag    *string `json:"CodecTag,omitempty"`
	Comment     *string `json:"Comment,omitempty"`
	DeliveryURL *string `json:"DeliveryUrl,omitempty"`
	FileName    *string `json:"FileName,omitempty"`
	Index       *int32  `json:"Index,omitempty"`
	MimeType    *string `json:"MimeType,omitempty"`
}

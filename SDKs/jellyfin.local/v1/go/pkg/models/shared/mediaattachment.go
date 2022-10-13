package shared

type MediaAttachment struct {
	Codec       *string `json:"Codec"`
	CodecTag    *string `json:"CodecTag"`
	Comment     *string `json:"Comment"`
	DeliveryURL *string `json:"DeliveryUrl"`
	FileName    *string `json:"FileName"`
	Index       *int32  `json:"Index"`
	MimeType    *string `json:"MimeType"`
}

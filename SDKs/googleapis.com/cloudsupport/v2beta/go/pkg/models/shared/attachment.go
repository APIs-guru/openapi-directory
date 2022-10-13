package shared

type Attachment struct {
	CreateTime *string `json:"createTime"`
	Creator    *Actor  `json:"creator"`
	Filename   *string `json:"filename"`
	MimeType   *string `json:"mimeType"`
	Name       *string `json:"name"`
	SizeBytes  *string `json:"sizeBytes"`
}

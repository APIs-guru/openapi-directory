package shared

type LettingsLandlordDocument struct {
	FileName *string `json:"FileName"`
	FileSize *int32  `json:"FileSize"`
	ID       *string `json:"ID"`
	MimeType *string `json:"MIMEType"`
	Note     *string `json:"Note"`
}

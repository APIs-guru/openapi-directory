package shared

type LettingsLandlordDocument struct {
	FileName *string `json:"FileName,omitempty"`
	FileSize *int32  `json:"FileSize,omitempty"`
	ID       *string `json:"ID,omitempty"`
	MimeType *string `json:"MIMEType,omitempty"`
	Note     *string `json:"Note,omitempty"`
}

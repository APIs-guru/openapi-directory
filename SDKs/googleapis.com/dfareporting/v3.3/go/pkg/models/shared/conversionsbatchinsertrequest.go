package shared

// ConversionsBatchInsertRequest
// Insert Conversions Request.
type ConversionsBatchInsertRequest struct {
	Conversions    []Conversion    `json:"conversions,omitempty"`
	EncryptionInfo *EncryptionInfo `json:"encryptionInfo,omitempty"`
	Kind           *string         `json:"kind,omitempty"`
}

package shared

type ConversionsBatchInsertRequest struct {
	Conversions    []Conversion    `json:"conversions"`
	EncryptionInfo *EncryptionInfo `json:"encryptionInfo"`
	Kind           *string         `json:"kind"`
}

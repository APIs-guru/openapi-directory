package shared

type ConversionsBatchUpdateRequest struct {
	Conversions    []Conversion    `json:"conversions,omitempty"`
	EncryptionInfo *EncryptionInfo `json:"encryptionInfo,omitempty"`
	Kind           *string         `json:"kind,omitempty"`
}

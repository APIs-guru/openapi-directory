package shared

// MpegCommonEncryption
// Configuration for MPEG Common Encryption (MPEG-CENC).
type MpegCommonEncryption struct {
	KeyID  *string `json:"keyId,omitempty"`
	Scheme *string `json:"scheme,omitempty"`
}

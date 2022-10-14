package shared

type MpegCommonEncryption struct {
	KeyID  *string `json:"keyId,omitempty"`
	Scheme *string `json:"scheme,omitempty"`
}

package shared

// Encryption
// Encryption settings.
type Encryption struct {
	Aes128    *Aes128Encryption     `json:"aes128,omitempty"`
	Iv        *string               `json:"iv,omitempty"`
	Key       *string               `json:"key,omitempty"`
	MpegCenc  *MpegCommonEncryption `json:"mpegCenc,omitempty"`
	SampleAes *SampleAesEncryption  `json:"sampleAes,omitempty"`
}

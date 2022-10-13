package shared

type Encryption struct {
	Aes128    *Aes128Encryption     `json:"aes128"`
	Iv        *string               `json:"iv"`
	Key       *string               `json:"key"`
	MpegCenc  *MpegCommonEncryption `json:"mpegCenc"`
	SampleAes *SampleAesEncryption  `json:"sampleAes"`
}

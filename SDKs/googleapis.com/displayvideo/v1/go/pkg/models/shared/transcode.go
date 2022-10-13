package shared

type Transcode struct {
	AudioBitRateKbps  *string     `json:"audioBitRateKbps"`
	AudioSampleRateHz *string     `json:"audioSampleRateHz"`
	BitRateKbps       *string     `json:"bitRateKbps"`
	Dimensions        *Dimensions `json:"dimensions"`
	FileSizeBytes     *string     `json:"fileSizeBytes"`
	FrameRate         *float32    `json:"frameRate"`
	MimeType          *string     `json:"mimeType"`
	Name              *string     `json:"name"`
	Transcoded        *bool       `json:"transcoded"`
}

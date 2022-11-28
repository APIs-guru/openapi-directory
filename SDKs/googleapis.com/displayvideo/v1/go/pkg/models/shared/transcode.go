package shared

// Transcode
// Represents information about the transcoded audio or video file.
type Transcode struct {
	AudioBitRateKbps  *string     `json:"audioBitRateKbps,omitempty"`
	AudioSampleRateHz *string     `json:"audioSampleRateHz,omitempty"`
	BitRateKbps       *string     `json:"bitRateKbps,omitempty"`
	Dimensions        *Dimensions `json:"dimensions,omitempty"`
	FileSizeBytes     *string     `json:"fileSizeBytes,omitempty"`
	FrameRate         *float32    `json:"frameRate,omitempty"`
	MimeType          *string     `json:"mimeType,omitempty"`
	Name              *string     `json:"name,omitempty"`
	Transcoded        *bool       `json:"transcoded,omitempty"`
}

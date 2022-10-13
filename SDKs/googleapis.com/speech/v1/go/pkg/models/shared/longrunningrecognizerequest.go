package shared

type LongRunningRecognizeRequest struct {
	Audio        *RecognitionAudio       `json:"audio"`
	Config       *RecognitionConfig      `json:"config"`
	OutputConfig *TranscriptOutputConfig `json:"outputConfig"`
}

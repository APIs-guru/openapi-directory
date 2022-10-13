package shared

type RecognizeRequest struct {
	Audio  *RecognitionAudio  `json:"audio"`
	Config *RecognitionConfig `json:"config"`
}

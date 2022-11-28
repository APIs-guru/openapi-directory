package shared

// TranscriptNormalization
// Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
type TranscriptNormalization struct {
	Entries []Entry `json:"entries,omitempty"`
}

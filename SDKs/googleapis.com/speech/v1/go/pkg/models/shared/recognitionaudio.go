package shared

// RecognitionAudio
// Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
type RecognitionAudio struct {
	Content *string `json:"content,omitempty"`
	URI     *string `json:"uri,omitempty"`
}

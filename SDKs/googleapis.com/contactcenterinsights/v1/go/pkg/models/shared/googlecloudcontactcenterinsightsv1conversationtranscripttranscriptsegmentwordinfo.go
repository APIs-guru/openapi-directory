package shared

// GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo
// Word-level info for words in a transcript.
type GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo struct {
	Confidence  *float32 `json:"confidence,omitempty"`
	EndOffset   *string  `json:"endOffset,omitempty"`
	StartOffset *string  `json:"startOffset,omitempty"`
	Word        *string  `json:"word,omitempty"`
}

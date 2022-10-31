package shared



type GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment struct {
    ChannelTag *int32 `json:"channelTag,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    DialogflowSegmentMetadata *GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata `json:"dialogflowSegmentMetadata,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    MessageTime *string `json:"messageTime,omitempty"`
    SegmentParticipant *GoogleCloudContactcenterinsightsV1ConversationParticipant `json:"segmentParticipant,omitempty"`
    Sentiment *GoogleCloudContactcenterinsightsV1SentimentData `json:"sentiment,omitempty"`
    Text *string `json:"text,omitempty"`
    Words []GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo `json:"words,omitempty"`
    
}


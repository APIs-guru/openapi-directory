package shared

type GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment struct {
	ChannelTag                *int32                                                                                              `json:"channelTag"`
	Confidence                *float32                                                                                            `json:"confidence"`
	DialogflowSegmentMetadata *GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata `json:"dialogflowSegmentMetadata"`
	LanguageCode              *string                                                                                             `json:"languageCode"`
	MessageTime               *string                                                                                             `json:"messageTime"`
	SegmentParticipant        *GoogleCloudContactcenterinsightsV1ConversationParticipant                                          `json:"segmentParticipant"`
	Sentiment                 *GoogleCloudContactcenterinsightsV1SentimentData                                                    `json:"sentiment"`
	Text                      *string                                                                                             `json:"text"`
	Words                     []GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo                 `json:"words"`
}

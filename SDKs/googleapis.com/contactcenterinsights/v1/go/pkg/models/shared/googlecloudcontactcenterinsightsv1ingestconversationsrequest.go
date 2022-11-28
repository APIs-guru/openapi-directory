package shared

// GoogleCloudContactcenterinsightsV1IngestConversationsRequest
// The request to ingest conversations.
type GoogleCloudContactcenterinsightsV1IngestConversationsRequest struct {
	ConversationConfig     *GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig     `json:"conversationConfig,omitempty"`
	GcsSource              *GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource              `json:"gcsSource,omitempty"`
	Parent                 *string                                                                             `json:"parent,omitempty"`
	TranscriptObjectConfig *GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig `json:"transcriptObjectConfig,omitempty"`
}

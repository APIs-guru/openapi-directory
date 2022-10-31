package shared



type Video struct {
    AgeGating *VideoAgeGating `json:"ageGating,omitempty"`
    ContentDetails *VideoContentDetails `json:"contentDetails,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FileDetails *VideoFileDetails `json:"fileDetails,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LiveStreamingDetails *VideoLiveStreamingDetails `json:"liveStreamingDetails,omitempty"`
    Localizations map[string]VideoLocalization `json:"localizations,omitempty"`
    MonetizationDetails *VideoMonetizationDetails `json:"monetizationDetails,omitempty"`
    Player *VideoPlayer `json:"player,omitempty"`
    ProcessingDetails *VideoProcessingDetails `json:"processingDetails,omitempty"`
    ProjectDetails map[string]interface{} `json:"projectDetails,omitempty"`
    RecordingDetails *VideoRecordingDetails `json:"recordingDetails,omitempty"`
    Snippet *VideoSnippet `json:"snippet,omitempty"`
    Statistics *VideoStatistics `json:"statistics,omitempty"`
    Status *VideoStatus `json:"status,omitempty"`
    Suggestions *VideoSuggestions `json:"suggestions,omitempty"`
    TopicDetails *VideoTopicDetails `json:"topicDetails,omitempty"`
    
}


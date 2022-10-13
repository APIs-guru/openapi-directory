package shared

type Video struct {
	AgeGating            *VideoAgeGating              `json:"ageGating"`
	ContentDetails       *VideoContentDetails         `json:"contentDetails"`
	Etag                 *string                      `json:"etag"`
	FileDetails          *VideoFileDetails            `json:"fileDetails"`
	ID                   *string                      `json:"id"`
	Kind                 *string                      `json:"kind"`
	LiveStreamingDetails *VideoLiveStreamingDetails   `json:"liveStreamingDetails"`
	Localizations        map[string]VideoLocalization `json:"localizations"`
	MonetizationDetails  *VideoMonetizationDetails    `json:"monetizationDetails"`
	Player               *VideoPlayer                 `json:"player"`
	ProcessingDetails    *VideoProcessingDetails      `json:"processingDetails"`
	ProjectDetails       map[string]interface{}       `json:"projectDetails"`
	RecordingDetails     *VideoRecordingDetails       `json:"recordingDetails"`
	Snippet              *VideoSnippet                `json:"snippet"`
	Statistics           *VideoStatistics             `json:"statistics"`
	Status               *VideoStatus                 `json:"status"`
	Suggestions          *VideoSuggestions            `json:"suggestions"`
	TopicDetails         *VideoTopicDetails           `json:"topicDetails"`
}

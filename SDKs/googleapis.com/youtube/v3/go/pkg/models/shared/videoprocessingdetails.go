package shared

type VideoProcessingDetailsProcessingFailureReasonEnum string

const (
	VideoProcessingDetailsProcessingFailureReasonEnumUploadFailed    VideoProcessingDetailsProcessingFailureReasonEnum = "uploadFailed"
	VideoProcessingDetailsProcessingFailureReasonEnumTranscodeFailed VideoProcessingDetailsProcessingFailureReasonEnum = "transcodeFailed"
	VideoProcessingDetailsProcessingFailureReasonEnumStreamingFailed VideoProcessingDetailsProcessingFailureReasonEnum = "streamingFailed"
	VideoProcessingDetailsProcessingFailureReasonEnumOther           VideoProcessingDetailsProcessingFailureReasonEnum = "other"
)

type VideoProcessingDetailsProcessingStatusEnum string

const (
	VideoProcessingDetailsProcessingStatusEnumProcessing VideoProcessingDetailsProcessingStatusEnum = "processing"
	VideoProcessingDetailsProcessingStatusEnumSucceeded  VideoProcessingDetailsProcessingStatusEnum = "succeeded"
	VideoProcessingDetailsProcessingStatusEnumFailed     VideoProcessingDetailsProcessingStatusEnum = "failed"
	VideoProcessingDetailsProcessingStatusEnumTerminated VideoProcessingDetailsProcessingStatusEnum = "terminated"
)

type VideoProcessingDetails struct {
	EditorSuggestionsAvailability *string                                            `json:"editorSuggestionsAvailability"`
	FileDetailsAvailability       *string                                            `json:"fileDetailsAvailability"`
	ProcessingFailureReason       *VideoProcessingDetailsProcessingFailureReasonEnum `json:"processingFailureReason"`
	ProcessingIssuesAvailability  *string                                            `json:"processingIssuesAvailability"`
	ProcessingProgress            *VideoProcessingDetailsProcessingProgress          `json:"processingProgress"`
	ProcessingStatus              *VideoProcessingDetailsProcessingStatusEnum        `json:"processingStatus"`
	TagSuggestionsAvailability    *string                                            `json:"tagSuggestionsAvailability"`
	ThumbnailsAvailability        *string                                            `json:"thumbnailsAvailability"`
}

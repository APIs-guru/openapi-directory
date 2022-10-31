package shared




type VideoProcessingDetailsProcessingFailureReasonEnum string

const (
    VideoProcessingDetailsProcessingFailureReasonEnumUploadFailed VideoProcessingDetailsProcessingFailureReasonEnum = "uploadFailed"
VideoProcessingDetailsProcessingFailureReasonEnumTranscodeFailed VideoProcessingDetailsProcessingFailureReasonEnum = "transcodeFailed"
VideoProcessingDetailsProcessingFailureReasonEnumStreamingFailed VideoProcessingDetailsProcessingFailureReasonEnum = "streamingFailed"
VideoProcessingDetailsProcessingFailureReasonEnumOther VideoProcessingDetailsProcessingFailureReasonEnum = "other"
)



type VideoProcessingDetailsProcessingStatusEnum string

const (
    VideoProcessingDetailsProcessingStatusEnumProcessing VideoProcessingDetailsProcessingStatusEnum = "processing"
VideoProcessingDetailsProcessingStatusEnumSucceeded VideoProcessingDetailsProcessingStatusEnum = "succeeded"
VideoProcessingDetailsProcessingStatusEnumFailed VideoProcessingDetailsProcessingStatusEnum = "failed"
VideoProcessingDetailsProcessingStatusEnumTerminated VideoProcessingDetailsProcessingStatusEnum = "terminated"
)


type VideoProcessingDetails struct {
    EditorSuggestionsAvailability *string `json:"editorSuggestionsAvailability,omitempty"`
    FileDetailsAvailability *string `json:"fileDetailsAvailability,omitempty"`
    ProcessingFailureReason *VideoProcessingDetailsProcessingFailureReasonEnum `json:"processingFailureReason,omitempty"`
    ProcessingIssuesAvailability *string `json:"processingIssuesAvailability,omitempty"`
    ProcessingProgress *VideoProcessingDetailsProcessingProgress `json:"processingProgress,omitempty"`
    ProcessingStatus *VideoProcessingDetailsProcessingStatusEnum `json:"processingStatus,omitempty"`
    TagSuggestionsAvailability *string `json:"tagSuggestionsAvailability,omitempty"`
    ThumbnailsAvailability *string `json:"thumbnailsAvailability,omitempty"`
    
}


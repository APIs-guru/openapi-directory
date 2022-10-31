package shared

import (
"time")


type CaptionSnippetAudioTrackTypeEnum string

const (
    CaptionSnippetAudioTrackTypeEnumUnknown CaptionSnippetAudioTrackTypeEnum = "unknown"
CaptionSnippetAudioTrackTypeEnumPrimary CaptionSnippetAudioTrackTypeEnum = "primary"
CaptionSnippetAudioTrackTypeEnumCommentary CaptionSnippetAudioTrackTypeEnum = "commentary"
CaptionSnippetAudioTrackTypeEnumDescriptive CaptionSnippetAudioTrackTypeEnum = "descriptive"
)



type CaptionSnippetFailureReasonEnum string

const (
    CaptionSnippetFailureReasonEnumUnknownFormat CaptionSnippetFailureReasonEnum = "unknownFormat"
CaptionSnippetFailureReasonEnumUnsupportedFormat CaptionSnippetFailureReasonEnum = "unsupportedFormat"
CaptionSnippetFailureReasonEnumProcessingFailed CaptionSnippetFailureReasonEnum = "processingFailed"
)



type CaptionSnippetStatusEnum string

const (
    CaptionSnippetStatusEnumServing CaptionSnippetStatusEnum = "serving"
CaptionSnippetStatusEnumSyncing CaptionSnippetStatusEnum = "syncing"
CaptionSnippetStatusEnumFailed CaptionSnippetStatusEnum = "failed"
)



type CaptionSnippetTrackKindEnum string

const (
    CaptionSnippetTrackKindEnumStandard CaptionSnippetTrackKindEnum = "standard"
CaptionSnippetTrackKindEnumAsr CaptionSnippetTrackKindEnum = "ASR"
CaptionSnippetTrackKindEnumForced CaptionSnippetTrackKindEnum = "forced"
)


type CaptionSnippet struct {
    AudioTrackType *CaptionSnippetAudioTrackTypeEnum `json:"audioTrackType,omitempty"`
    FailureReason *CaptionSnippetFailureReasonEnum `json:"failureReason,omitempty"`
    IsAutoSynced *bool `json:"isAutoSynced,omitempty"`
    IsCc *bool `json:"isCC,omitempty"`
    IsDraft *bool `json:"isDraft,omitempty"`
    IsEasyReader *bool `json:"isEasyReader,omitempty"`
    IsLarge *bool `json:"isLarge,omitempty"`
    Language *string `json:"language,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *CaptionSnippetStatusEnum `json:"status,omitempty"`
    TrackKind *CaptionSnippetTrackKindEnum `json:"trackKind,omitempty"`
    VideoID *string `json:"videoId,omitempty"`
    
}


package shared

import (
	"time"
)

type CaptionSnippetAudioTrackTypeEnum string

const (
	CaptionSnippetAudioTrackTypeEnumUnknown     CaptionSnippetAudioTrackTypeEnum = "unknown"
	CaptionSnippetAudioTrackTypeEnumPrimary     CaptionSnippetAudioTrackTypeEnum = "primary"
	CaptionSnippetAudioTrackTypeEnumCommentary  CaptionSnippetAudioTrackTypeEnum = "commentary"
	CaptionSnippetAudioTrackTypeEnumDescriptive CaptionSnippetAudioTrackTypeEnum = "descriptive"
)

type CaptionSnippetFailureReasonEnum string

const (
	CaptionSnippetFailureReasonEnumUnknownFormat     CaptionSnippetFailureReasonEnum = "unknownFormat"
	CaptionSnippetFailureReasonEnumUnsupportedFormat CaptionSnippetFailureReasonEnum = "unsupportedFormat"
	CaptionSnippetFailureReasonEnumProcessingFailed  CaptionSnippetFailureReasonEnum = "processingFailed"
)

type CaptionSnippetStatusEnum string

const (
	CaptionSnippetStatusEnumServing CaptionSnippetStatusEnum = "serving"
	CaptionSnippetStatusEnumSyncing CaptionSnippetStatusEnum = "syncing"
	CaptionSnippetStatusEnumFailed  CaptionSnippetStatusEnum = "failed"
)

type CaptionSnippetTrackKindEnum string

const (
	CaptionSnippetTrackKindEnumStandard CaptionSnippetTrackKindEnum = "standard"
	CaptionSnippetTrackKindEnumAsr      CaptionSnippetTrackKindEnum = "ASR"
	CaptionSnippetTrackKindEnumForced   CaptionSnippetTrackKindEnum = "forced"
)

type CaptionSnippet struct {
	AudioTrackType *CaptionSnippetAudioTrackTypeEnum `json:"audioTrackType"`
	FailureReason  *CaptionSnippetFailureReasonEnum  `json:"failureReason"`
	IsAutoSynced   *bool                             `json:"isAutoSynced"`
	IsCc           *bool                             `json:"isCC"`
	IsDraft        *bool                             `json:"isDraft"`
	IsEasyReader   *bool                             `json:"isEasyReader"`
	IsLarge        *bool                             `json:"isLarge"`
	Language       *string                           `json:"language"`
	LastUpdated    *time.Time                        `json:"lastUpdated"`
	Name           *string                           `json:"name"`
	Status         *CaptionSnippetStatusEnum         `json:"status"`
	TrackKind      *CaptionSnippetTrackKindEnum      `json:"trackKind"`
	VideoID        *string                           `json:"videoId"`
}

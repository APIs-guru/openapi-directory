package shared

// AnnotationClientVersionRanges
// Selection ranges sent from the client.
type AnnotationClientVersionRanges struct {
	CfiRange       *BooksAnnotationsRange `json:"cfiRange,omitempty"`
	ContentVersion *string                `json:"contentVersion,omitempty"`
	GbImageRange   *BooksAnnotationsRange `json:"gbImageRange,omitempty"`
	GbTextRange    *BooksAnnotationsRange `json:"gbTextRange,omitempty"`
	ImageCfiRange  *BooksAnnotationsRange `json:"imageCfiRange,omitempty"`
}

// AnnotationCurrentVersionRanges
// Selection ranges for the most recent content version.
type AnnotationCurrentVersionRanges struct {
	CfiRange       *BooksAnnotationsRange `json:"cfiRange,omitempty"`
	ContentVersion *string                `json:"contentVersion,omitempty"`
	GbImageRange   *BooksAnnotationsRange `json:"gbImageRange,omitempty"`
	GbTextRange    *BooksAnnotationsRange `json:"gbTextRange,omitempty"`
	ImageCfiRange  *BooksAnnotationsRange `json:"imageCfiRange,omitempty"`
}

type AnnotationLayerSummary struct {
	AllowedCharacterCount   *int32  `json:"allowedCharacterCount,omitempty"`
	LimitType               *string `json:"limitType,omitempty"`
	RemainingCharacterCount *int32  `json:"remainingCharacterCount,omitempty"`
}

type Annotation struct {
	AfterSelectedText    *string                         `json:"afterSelectedText,omitempty"`
	BeforeSelectedText   *string                         `json:"beforeSelectedText,omitempty"`
	ClientVersionRanges  *AnnotationClientVersionRanges  `json:"clientVersionRanges,omitempty"`
	Created              *string                         `json:"created,omitempty"`
	CurrentVersionRanges *AnnotationCurrentVersionRanges `json:"currentVersionRanges,omitempty"`
	Data                 *string                         `json:"data,omitempty"`
	Deleted              *bool                           `json:"deleted,omitempty"`
	HighlightStyle       *string                         `json:"highlightStyle,omitempty"`
	ID                   *string                         `json:"id,omitempty"`
	Kind                 *string                         `json:"kind,omitempty"`
	LayerID              *string                         `json:"layerId,omitempty"`
	LayerSummary         *AnnotationLayerSummary         `json:"layerSummary,omitempty"`
	PageIds              []string                        `json:"pageIds,omitempty"`
	SelectedText         *string                         `json:"selectedText,omitempty"`
	SelfLink             *string                         `json:"selfLink,omitempty"`
	Updated              *string                         `json:"updated,omitempty"`
	VolumeID             *string                         `json:"volumeId,omitempty"`
}

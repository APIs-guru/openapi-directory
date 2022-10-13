package shared

type AnnotationClientVersionRanges struct {
	CfiRange       *BooksAnnotationsRange `json:"cfiRange"`
	ContentVersion *string                `json:"contentVersion"`
	GbImageRange   *BooksAnnotationsRange `json:"gbImageRange"`
	GbTextRange    *BooksAnnotationsRange `json:"gbTextRange"`
	ImageCfiRange  *BooksAnnotationsRange `json:"imageCfiRange"`
}

type AnnotationCurrentVersionRanges struct {
	CfiRange       *BooksAnnotationsRange `json:"cfiRange"`
	ContentVersion *string                `json:"contentVersion"`
	GbImageRange   *BooksAnnotationsRange `json:"gbImageRange"`
	GbTextRange    *BooksAnnotationsRange `json:"gbTextRange"`
	ImageCfiRange  *BooksAnnotationsRange `json:"imageCfiRange"`
}

type AnnotationLayerSummary struct {
	AllowedCharacterCount   *int32  `json:"allowedCharacterCount"`
	LimitType               *string `json:"limitType"`
	RemainingCharacterCount *int32  `json:"remainingCharacterCount"`
}

type Annotation struct {
	AfterSelectedText    *string                         `json:"afterSelectedText"`
	BeforeSelectedText   *string                         `json:"beforeSelectedText"`
	ClientVersionRanges  *AnnotationClientVersionRanges  `json:"clientVersionRanges"`
	Created              *string                         `json:"created"`
	CurrentVersionRanges *AnnotationCurrentVersionRanges `json:"currentVersionRanges"`
	Data                 *string                         `json:"data"`
	Deleted              *bool                           `json:"deleted"`
	HighlightStyle       *string                         `json:"highlightStyle"`
	ID                   *string                         `json:"id"`
	Kind                 *string                         `json:"kind"`
	LayerID              *string                         `json:"layerId"`
	LayerSummary         *AnnotationLayerSummary         `json:"layerSummary"`
	PageIds              []string                        `json:"pageIds"`
	SelectedText         *string                         `json:"selectedText"`
	SelfLink             *string                         `json:"selfLink"`
	Updated              *string                         `json:"updated"`
	VolumeID             *string                         `json:"volumeId"`
}

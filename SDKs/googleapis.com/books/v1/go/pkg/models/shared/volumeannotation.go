package shared

type VolumeannotationContentRanges struct {
	CfiRange       *BooksAnnotationsRange `json:"cfiRange,omitempty"`
	ContentVersion *string                `json:"contentVersion,omitempty"`
	GbImageRange   *BooksAnnotationsRange `json:"gbImageRange,omitempty"`
	GbTextRange    *BooksAnnotationsRange `json:"gbTextRange,omitempty"`
}

type Volumeannotation struct {
	AnnotationDataID   *string                        `json:"annotationDataId,omitempty"`
	AnnotationDataLink *string                        `json:"annotationDataLink,omitempty"`
	AnnotationType     *string                        `json:"annotationType,omitempty"`
	ContentRanges      *VolumeannotationContentRanges `json:"contentRanges,omitempty"`
	Data               *string                        `json:"data,omitempty"`
	Deleted            *bool                          `json:"deleted,omitempty"`
	ID                 *string                        `json:"id,omitempty"`
	Kind               *string                        `json:"kind,omitempty"`
	LayerID            *string                        `json:"layerId,omitempty"`
	PageIds            []string                       `json:"pageIds,omitempty"`
	SelectedText       *string                        `json:"selectedText,omitempty"`
	SelfLink           *string                        `json:"selfLink,omitempty"`
	Updated            *string                        `json:"updated,omitempty"`
	VolumeID           *string                        `json:"volumeId,omitempty"`
}

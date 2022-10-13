package shared

type VolumeannotationContentRanges struct {
	CfiRange       *BooksAnnotationsRange `json:"cfiRange"`
	ContentVersion *string                `json:"contentVersion"`
	GbImageRange   *BooksAnnotationsRange `json:"gbImageRange"`
	GbTextRange    *BooksAnnotationsRange `json:"gbTextRange"`
}

type Volumeannotation struct {
	AnnotationDataID   *string                        `json:"annotationDataId"`
	AnnotationDataLink *string                        `json:"annotationDataLink"`
	AnnotationType     *string                        `json:"annotationType"`
	ContentRanges      *VolumeannotationContentRanges `json:"contentRanges"`
	Data               *string                        `json:"data"`
	Deleted            *bool                          `json:"deleted"`
	ID                 *string                        `json:"id"`
	Kind               *string                        `json:"kind"`
	LayerID            *string                        `json:"layerId"`
	PageIds            []string                       `json:"pageIds"`
	SelectedText       *string                        `json:"selectedText"`
	SelfLink           *string                        `json:"selfLink"`
	Updated            *string                        `json:"updated"`
	VolumeID           *string                        `json:"volumeId"`
}

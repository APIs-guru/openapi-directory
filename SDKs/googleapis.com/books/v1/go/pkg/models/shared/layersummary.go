package shared

type Layersummary struct {
	AnnotationCount          *int32   `json:"annotationCount"`
	AnnotationTypes          []string `json:"annotationTypes"`
	AnnotationsDataLink      *string  `json:"annotationsDataLink"`
	AnnotationsLink          *string  `json:"annotationsLink"`
	ContentVersion           *string  `json:"contentVersion"`
	DataCount                *int32   `json:"dataCount"`
	ID                       *string  `json:"id"`
	Kind                     *string  `json:"kind"`
	LayerID                  *string  `json:"layerId"`
	SelfLink                 *string  `json:"selfLink"`
	Updated                  *string  `json:"updated"`
	VolumeAnnotationsVersion *string  `json:"volumeAnnotationsVersion"`
	VolumeID                 *string  `json:"volumeId"`
}

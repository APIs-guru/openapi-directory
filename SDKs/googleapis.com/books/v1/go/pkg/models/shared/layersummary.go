package shared



type Layersummary struct {
    AnnotationCount *int32 `json:"annotationCount,omitempty"`
    AnnotationTypes []string `json:"annotationTypes,omitempty"`
    AnnotationsDataLink *string `json:"annotationsDataLink,omitempty"`
    AnnotationsLink *string `json:"annotationsLink,omitempty"`
    ContentVersion *string `json:"contentVersion,omitempty"`
    DataCount *int32 `json:"dataCount,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LayerID *string `json:"layerId,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Updated *string `json:"updated,omitempty"`
    VolumeAnnotationsVersion *string `json:"volumeAnnotationsVersion,omitempty"`
    VolumeID *string `json:"volumeId,omitempty"`
    
}


package shared

type DictionaryAnnotationdata struct {
	AnnotationType *string        `json:"annotationType"`
	Data           *Dictlayerdata `json:"data"`
	EncodedData    *string        `json:"encodedData"`
	ID             *string        `json:"id"`
	Kind           *string        `json:"kind"`
	LayerID        *string        `json:"layerId"`
	SelfLink       *string        `json:"selfLink"`
	Updated        *string        `json:"updated"`
	VolumeID       *string        `json:"volumeId"`
}

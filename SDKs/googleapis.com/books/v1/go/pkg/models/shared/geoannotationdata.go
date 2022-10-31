package shared

type GeoAnnotationdata struct {
	AnnotationType *string       `json:"annotationType,omitempty"`
	Data           *Geolayerdata `json:"data,omitempty"`
	EncodedData    *string       `json:"encodedData,omitempty"`
	ID             *string       `json:"id,omitempty"`
	Kind           *string       `json:"kind,omitempty"`
	LayerID        *string       `json:"layerId,omitempty"`
	SelfLink       *string       `json:"selfLink,omitempty"`
	Updated        *string       `json:"updated,omitempty"`
	VolumeID       *string       `json:"volumeId,omitempty"`
}

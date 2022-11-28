package shared

// ImageOccurrence
// Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
type ImageOccurrence struct {
	BaseResourceURL *string      `json:"baseResourceUrl,omitempty"`
	Distance        *int32       `json:"distance,omitempty"`
	Fingerprint     *Fingerprint `json:"fingerprint,omitempty"`
	LayerInfo       []Layer      `json:"layerInfo,omitempty"`
}

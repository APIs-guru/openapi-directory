package shared

// Derived
// Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
type Derived struct {
	BaseResourceURL *string      `json:"baseResourceUrl,omitempty"`
	Distance        *int64       `json:"distance,omitempty"`
	Fingerprint     *Fingerprint `json:"fingerprint,omitempty"`
	LayerInfo       []Layer      `json:"layerInfo,omitempty"`
}

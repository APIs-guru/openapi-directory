package shared

type ImageOccurrence struct {
	BaseResourceURL *string      `json:"baseResourceUrl"`
	Distance        *int32       `json:"distance"`
	Fingerprint     *Fingerprint `json:"fingerprint"`
	LayerInfo       []Layer      `json:"layerInfo"`
}

package shared

type Derived struct {
	BaseResourceURL *string      `json:"baseResourceUrl"`
	Distance        *int64       `json:"distance"`
	Fingerprint     *Fingerprint `json:"fingerprint"`
	LayerInfo       []Layer      `json:"layerInfo"`
}

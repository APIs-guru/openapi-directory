package shared



type ImageOccurrence struct {
    BaseResourceURL *string `json:"baseResourceUrl,omitempty"`
    Distance *int32 `json:"distance,omitempty"`
    Fingerprint *Fingerprint `json:"fingerprint,omitempty"`
    LayerInfo []Layer `json:"layerInfo,omitempty"`
    
}


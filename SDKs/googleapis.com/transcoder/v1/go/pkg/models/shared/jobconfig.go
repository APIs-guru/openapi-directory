package shared



type JobConfig struct {
    AdBreaks []AdBreak `json:"adBreaks,omitempty"`
    EditList []EditAtom `json:"editList,omitempty"`
    ElementaryStreams []ElementaryStream `json:"elementaryStreams,omitempty"`
    Inputs []Input `json:"inputs,omitempty"`
    Manifests []Manifest `json:"manifests,omitempty"`
    MuxStreams []MuxStream `json:"muxStreams,omitempty"`
    Output *Output `json:"output,omitempty"`
    Overlays []Overlay `json:"overlays,omitempty"`
    PubsubDestination *PubsubDestination `json:"pubsubDestination,omitempty"`
    SpriteSheets []SpriteSheet `json:"spriteSheets,omitempty"`
    
}


package shared

type JobConfig struct {
	AdBreaks          []AdBreak          `json:"adBreaks"`
	EditList          []EditAtom         `json:"editList"`
	ElementaryStreams []ElementaryStream `json:"elementaryStreams"`
	Inputs            []Input            `json:"inputs"`
	Manifests         []Manifest         `json:"manifests"`
	MuxStreams        []MuxStream        `json:"muxStreams"`
	Output            *Output            `json:"output"`
	Overlays          []Overlay          `json:"overlays"`
	PubsubDestination *PubsubDestination `json:"pubsubDestination"`
	SpriteSheets      []SpriteSheet      `json:"spriteSheets"`
}

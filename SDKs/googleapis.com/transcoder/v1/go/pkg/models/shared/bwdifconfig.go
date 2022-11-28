package shared

// BwdifConfig
// Bob Weaver Deinterlacing Filter Configuration.
type BwdifConfig struct {
	DeinterlaceAllFrames *bool   `json:"deinterlaceAllFrames,omitempty"`
	Mode                 *string `json:"mode,omitempty"`
	Parity               *string `json:"parity,omitempty"`
}

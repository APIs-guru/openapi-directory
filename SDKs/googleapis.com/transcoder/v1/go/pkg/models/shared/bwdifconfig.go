package shared

type BwdifConfig struct {
	DeinterlaceAllFrames *bool   `json:"deinterlaceAllFrames"`
	Mode                 *string `json:"mode"`
	Parity               *string `json:"parity"`
}

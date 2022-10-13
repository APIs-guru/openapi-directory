package shared

type YadifConfig struct {
	DeinterlaceAllFrames      *bool   `json:"deinterlaceAllFrames"`
	DisableSpatialInterlacing *bool   `json:"disableSpatialInterlacing"`
	Mode                      *string `json:"mode"`
	Parity                    *string `json:"parity"`
}

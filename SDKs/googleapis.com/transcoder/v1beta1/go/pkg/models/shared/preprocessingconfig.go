package shared

type PreprocessingConfig struct {
	Audio   *Audio   `json:"audio"`
	Color   *Color   `json:"color"`
	Crop    *Crop    `json:"crop"`
	Deblock *Deblock `json:"deblock"`
	Denoise *Denoise `json:"denoise"`
	Pad     *Pad     `json:"pad"`
}

package shared

type PreprocessingConfig struct {
	Audio       *Audio       `json:"audio,omitempty"`
	Color       *Color       `json:"color,omitempty"`
	Crop        *Crop        `json:"crop,omitempty"`
	Deblock     *Deblock     `json:"deblock,omitempty"`
	Deinterlace *Deinterlace `json:"deinterlace,omitempty"`
	Denoise     *Denoise     `json:"denoise,omitempty"`
	Pad         *Pad         `json:"pad,omitempty"`
}

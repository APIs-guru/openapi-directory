package shared

type VMImage struct {
	ImageFamily *string `json:"imageFamily,omitempty"`
	ImageName   *string `json:"imageName,omitempty"`
	Project     *string `json:"project,omitempty"`
}

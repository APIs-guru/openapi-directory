package shared

type VMImage struct {
	ImageFamily *string `json:"imageFamily"`
	ImageName   *string `json:"imageName"`
	Project     *string `json:"project"`
}

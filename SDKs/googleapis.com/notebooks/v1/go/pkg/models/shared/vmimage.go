package shared

// VMImage
// Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
type VMImage struct {
	ImageFamily *string `json:"imageFamily,omitempty"`
	ImageName   *string `json:"imageName,omitempty"`
	Project     *string `json:"project,omitempty"`
}

package shared

// ContainerImage
// Definition of a container image for starting a notebook instance with the environment installed in a container.
type ContainerImage struct {
	Repository *string `json:"repository,omitempty"`
	Tag        *string `json:"tag,omitempty"`
}

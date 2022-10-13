package shared

type ContainerImage struct {
	Repository *string `json:"repository"`
	Tag        *string `json:"tag"`
}

package shared

type Container struct {
	ImageID *string `json:"imageId"`
	Labels  []Label `json:"labels"`
	Name    *string `json:"name"`
	URI     *string `json:"uri"`
}

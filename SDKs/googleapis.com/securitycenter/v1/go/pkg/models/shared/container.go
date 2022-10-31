package shared

type Container struct {
	ImageID *string `json:"imageId,omitempty"`
	Labels  []Label `json:"labels,omitempty"`
	Name    *string `json:"name,omitempty"`
	URI     *string `json:"uri,omitempty"`
}

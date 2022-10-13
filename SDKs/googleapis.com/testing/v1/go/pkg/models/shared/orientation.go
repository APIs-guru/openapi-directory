package shared

type Orientation struct {
	ID   *string  `json:"id"`
	Name *string  `json:"name"`
	Tags []string `json:"tags"`
}

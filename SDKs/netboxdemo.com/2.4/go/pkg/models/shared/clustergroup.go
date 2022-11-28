package shared

type ClusterGroupInput struct {
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type ClusterGroup struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}

package shared

type ClusterType struct {
	ID   *int64 `json:"id"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}

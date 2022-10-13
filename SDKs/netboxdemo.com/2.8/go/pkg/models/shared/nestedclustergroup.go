package shared

type NestedClusterGroup struct {
	ClusterCount *int64  `json:"cluster_count"`
	ID           *int64  `json:"id"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
	URL          *string `json:"url"`
}

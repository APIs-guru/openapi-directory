package shared

type ClusterGroup struct {
	ClusterCount *int64  `json:"cluster_count"`
	Description  *string `json:"description"`
	ID           *int64  `json:"id"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
}

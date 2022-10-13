package shared

type ListNamespacesResponse struct {
	Namespaces    []Namespace `json:"namespaces"`
	NextPageToken *string     `json:"nextPageToken"`
}

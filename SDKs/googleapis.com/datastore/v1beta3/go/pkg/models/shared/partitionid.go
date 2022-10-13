package shared

type PartitionID struct {
	NamespaceID *string `json:"namespaceId"`
	ProjectID   *string `json:"projectId"`
}

package shared

type PartitionID struct {
	DatabaseID  *string `json:"databaseId"`
	NamespaceID *string `json:"namespaceId"`
	ProjectID   *string `json:"projectId"`
}

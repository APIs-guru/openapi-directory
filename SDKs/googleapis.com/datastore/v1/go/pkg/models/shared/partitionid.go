package shared



type PartitionID struct {
    DatabaseID *string `json:"databaseId,omitempty"`
    NamespaceID *string `json:"namespaceId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    
}


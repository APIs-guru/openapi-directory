package shared

// PartitionID
// A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `""`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state.
type PartitionID struct {
	DatabaseID  *string `json:"databaseId,omitempty"`
	NamespaceID *string `json:"namespaceId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
}

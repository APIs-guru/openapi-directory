package shared

// GooglePrivacyDlpV2PartitionID
// Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
type GooglePrivacyDlpV2PartitionID struct {
	NamespaceID *string `json:"namespaceId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
}

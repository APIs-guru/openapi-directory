package shared

// GooglePrivacyDlpV2DatastoreOptions
// Options defining a data set within Google Cloud Datastore.
type GooglePrivacyDlpV2DatastoreOptions struct {
	Kind        *GooglePrivacyDlpV2KindExpression `json:"kind,omitempty"`
	PartitionID *GooglePrivacyDlpV2PartitionID    `json:"partitionId,omitempty"`
}

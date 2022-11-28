package shared

// AzureCredentials
// Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
type AzureCredentials struct {
	SasToken *string `json:"sasToken,omitempty"`
}
